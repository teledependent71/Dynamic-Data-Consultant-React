import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Data Consultant</title>
        <meta property="og:title" content="Dynamic Data Consultant" />
      </Helmet>
    </div>
  )
}

export default Home
