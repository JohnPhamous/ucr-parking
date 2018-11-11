import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,900"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          />
          <html lang="en" />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Container>{children}</Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
