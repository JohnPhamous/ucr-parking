import React, { Component } from 'react'
import styled from 'styled-components'

import GoogleMapReact from 'google-map-react'

const MapContainer = styled.div``
const KEY = `AIzaSyBHgqIvIIprykyo2VLEyluGhBI28q2zFQg`

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 15,
  }

  render() {
    return (
      <MapContainer style={{ height: `100px` }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEY }}
          defaultCenter={this.props.location}
          defaultZoom={15}
        />
      </MapContainer>
    )
  }
}
