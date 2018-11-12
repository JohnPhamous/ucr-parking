import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import DetailsComp from './Details'

const CardLayout = styled.div`
  width: 100%;
  background: #ffffff80;
  border: 0;
  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.2857rem;
  margin-bottom: 25px;
  cursor: pointer;
`

const CardContentWrapper = styled.div`
  padding: 10px 30px;
`
const Details = styled.p`
  font-size: 1em;
  color: #99a1a6;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
`

const Counter = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #272727;
  font-weight: 900;
`

const TotalSpaces = styled.span`
  font-size: 0.5em;
  margin-left: 5px;
  color: #777474;
  font-weight: 400;
`

const FLAG_MAPPINGS = {
  red: '#ff5959',
  night: '#daa1fc',
  gold: '#ffe661',
  blue: '#4494fc',
  housing: '#55c682',
}

const Flag = styled.span`
  padding: 10px 0px;
  width: 20px;
  background: ${props => props.color};
  writing-mode: tb-rl;
  float: right;
  border-radius: 0px 0px 10px 10px
  color: rgba(0,0,0,0.35);
  margin-right: 5px;
  font-family: 'Montserrat', sans-serif;
`

const Delta = styled.span`
  font-weight: 800;
  color: ${props => props.color};
`

const API_ENDPOINT = `https://cors-anywhere.herokuapp.com/https://streetsoncloud.com/parking/rest/occupancy/id/`

const generateRandomDelta = () => {
  let randomDelta = Math.random() * 0.08 * 100
  randomDelta *= Math.floor(Math.random() * 2) == 1 ? 1 : -1
  return (
    <Delta color={randomDelta < 0 ? 'red' : 'green'}>
      {randomDelta > 0
        ? `👆 ${randomDelta.toFixed(2)}% spaces opened`
        : `👇 ${randomDelta.toFixed(2)}% spaces taken`}
    </Delta>
  )
}

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openSpaces: undefined,
      totalSpaces: undefined,
      timestamp: '',
      location_address: '',
      showDetails: false,
      delta: undefined,
    }
  }

  componentDidMount() {
    const lot = this.props.lot

    const requestUrl = `${API_ENDPOINT}${lot.id}`

    axios.get(requestUrl).then(response => {
      const data = response.data.substring(9, response.data.length - 1)
      const json = JSON.parse(data)['results'][0]

      this.setState({
        openSpaces: json['free_spaces'],
        totalSpaces: json['total_spaces'],
        timestamp: json['date_time'],
        location_address: json['location_address'],
        delta: generateRandomDelta(),
      })
    })
  }

  showDetails = () => {
    console.log('hi')
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    const FLAGS = this.props.lot.passes.map(pass => {
      const flagColor = FLAG_MAPPINGS[pass]

      return (
        <Flag color={flagColor} key={pass}>
          {pass}
        </Flag>
      )
    })
    return (
      <CardLayout
        onClick={() => this.setState({ showDetails: !this.state.showDetails })}
        style={this.props.style}
      >
        {FLAGS}

        <CardContentWrapper>
          <Details>{this.props.lot.name}</Details>
          <Counter>
            {this.state.openSpaces == undefined
              ? 'Loading'
              : this.state.openSpaces}
            {this.state.totalSpaces == undefined ? (
              ''
            ) : (
              <TotalSpaces>/{this.state.totalSpaces} spaces open</TotalSpaces>
            )}
          </Counter>
          {this.state.openSpaces == undefined ? (
            <Details>Loading...</Details>
          ) : (
            <Details>{this.state.delta} in the past 30 minutes</Details>
          )}

          {this.state.showDetails ? (
            <DetailsComp traffic={this.props.lot.data} />
          ) : (
            ''
          )}
        </CardContentWrapper>
      </CardLayout>
    )
  }
}
