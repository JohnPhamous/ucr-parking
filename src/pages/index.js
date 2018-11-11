import React from 'react'

import Layout from '../components/layout'
import Card from '../components/Card'

import styled from 'styled-components'

const CardContainer = styled.div`
  height: 100vh;
  padding-top: 25px;
  padding-bottom: 25px;
  /* background: blue; */
`
const PARKING_LOTS = [
  {
    name: 'Big Strings Structure',
    address: 'Big Springs Road',
    id: 84,
  },
  {
    name: 'Lot 6',
    address: 'West Campus Drive',
    id: 238,
  },
  {
    name: 'Lot 24',
    address: 'Canyon Crest Drive',
    id: 243,
  },
  {
    name: 'Lot 26',
    address: '3375 Rustin Avenue',
    id: 80,
  },
  {
    name: 'Lot 30',
    address: 'UCR Lot 30',
    id: 82,
  },
  {
    name: 'Lot 32',
    address: '4297 Canyon Crest Drive',
    id: 83,
  },
]

const CARDS = PARKING_LOTS.map(card => {
  return <Card lot={card} key={card.id} />
})
const IndexPage = () => (
  <Layout>
    <CardContainer>{CARDS}</CardContainer>
  </Layout>
)

export default IndexPage