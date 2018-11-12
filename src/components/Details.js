import React, { Component } from 'react'

import Chart from './Chart'
import Map from './Map'

export default class DetailsComp extends Component {
  render() {
    return (
      <div>
        <Chart data={this.props.traffic} />
        <Map location={this.props.location} />
      </div>
    )
  }
}
