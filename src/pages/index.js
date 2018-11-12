import React from 'react'

import Layout from '../components/layout'
import Card from '../components/Card'

import { Trail } from 'react-spring'
import styled from 'styled-components'

const CardContainer = styled.div`
  height: 100vh;
  padding-top: 25px;
  padding-bottom: 25px;
`
const PARKING_LOTS = [
  {
    name: 'Big Strings Structure',
    address: 'Big Springs Road',
    id: 84,
    passes: ['housing'],
    data: [80, 83, 78, 75, 80, 45, 50, 89, 73, 92, 42, 46, 53, 73, 82, 80],
  },
  {
    name: 'Lot 6',
    address: 'West Campus Drive',
    id: 238,
    passes: [],
    data: [10, 13, 20, 60, 55, 83, 71, 64, 69, 78, 64, 42, 33, 24, 28, 19],
  },
  {
    name: 'Lot 24',
    address: 'Canyon Crest Drive',
    id: 243,
    passes: [],
    data: [15, 24, 29, 75, 80, 45, 50, 89, 73, 92, 42, 46, 53, 73, 82, 80],
  },
  {
    name: 'Lot 26',
    address: '3375 Rustin Avenue',
    id: 80,
    passes: ['gold', 'night', 'red', 'blue'],
    data: [3, 14, 23, 34, 59, 42, 63, 74, 59, 67, 57, 53, 42, 46, 33, 19],
  },
  {
    name: 'Lot 30',
    address: 'UCR Lot 30',
    id: 82,
    passes: ['gold', 'night', 'red', 'blue'],
    data: [23, 43, 78, 83, 80, 60, 53, 49, 59, 69, 73, 68, 53, 42, 38, 20],
  },
  {
    name: 'Lot 32',
    address: '4297 Canyon Crest Drive',
    id: 83,
    passes: ['gold', 'night', 'red', 'blue'],
    data: [80, 83, 78, 75, 80, 45, 50, 89, 73, 92, 42, 46, 53, 73, 82, 80],
  },
]

const IndexPage = () => (
  <Layout>
    <CardContainer>
      <Trail
        items={PARKING_LOTS}
        keys={card => card.id}
        from={{
          transform: 'translate3d(0,-1000px,0)',
          opacity: 0,
        }}
        to={{
          transform: 'translate3d(0,0px,0)',
          opacity: 1,
        }}
        config={{
          delay: 250,
        }}
      >
        {card => props => <Card style={props} lot={card} key={card.id} />}
      </Trail>
    </CardContainer>
  </Layout>
)

export default IndexPage
