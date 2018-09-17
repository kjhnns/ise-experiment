import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Body from './Body'
import './style.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'TU Darmstadt ISE Experiment' },
      ]}
    />
    <Body>
    {children()}
    </Body>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
