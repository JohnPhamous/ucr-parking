import React, { Component } from 'react'
import styled from 'styled-components'

import GoogleMapReact from 'google-map-react'

const MapContainer = styled.div`
  height: 150px;
`
const KEY = `AIzaSyBHgqIvIIprykyo2VLEyluGhBI28q2zFQg`

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 15,
  }

  redirect = event => {
    window.location.href = `https://www.google.com/maps/search/?api=1&query=${
      this.props.location.lat
    },${this.props.location.lng}`
  }

  render() {
    return (
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: KEY }}
          defaultCenter={this.props.location}
          defaultZoom={15}
          onClick={this.redirect}
        >
          <img
            src="https://i.imgur.com/yK3IZHv.png"
            lat={this.props.location.lat}
            lng={this.props.location.lng}
            height="28px"
            alt=""
          />
        </GoogleMapReact>
      </MapContainer>
    )
  }
}
