import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi, Hackathoners</h1>
    <p>Default Gatsby paragraph.</p>
    <p>Now go hack something in 2 days.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
