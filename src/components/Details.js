import React, { Component } from 'react'

import Chart from './Chart'
import Map from './Map'
import styled from 'styled-components'

const Details = styled.p`
  font-size: 1em;
  color: #4a4a4a;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  margin-top: 25px;
  margin-bottom: 0px;
`

export default class DetailsComp extends Component {
  render() {
    return (
      <div>
        <Details>Parking Lot Capacity</Details>
        <Chart data={this.props.traffic} />
        <Map location={this.props.location} />
      </div>
    )
  }
}
