import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

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
`
const API_ENDPOINT = `https://cors-anywhere.herokuapp.com/https://streetsoncloud.com/parking/rest/occupancy/id/`

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openSpaces: 0,
      totalSpaces: 0,
      timestamp: '',
      location_address: '',
    }
  }

  componentDidMount() {
    const lot = this.props.lot

    const requestUrl = `${API_ENDPOINT}${lot.id}`
    console.log(requestUrl)

    axios.get(requestUrl).then(response => {
      const data = response.data.substring(9, response.data.length - 1)
      const json = JSON.parse(data)['results'][0]

      this.setState({
        openSpaces: json['free_spaces'],
        totalSpaces: json['total_spaces'],
        timestamp: json['date_time'],
        location_address: json['location_address'],
      })
    })
  }
  render() {
    return (
      <CardLayout>
        <CardContentWrapper>
          <Details>{this.props.lot.name}</Details>
          <Counter>
            {this.state.openSpaces === 0 ? 'Loading' : this.state.openSpaces}
          </Counter>
          <Details>
            <span>+22%</span> in the past 30 minutes
          </Details>
        </CardContentWrapper>
      </CardLayout>
    )
  }
}
