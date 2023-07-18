import React from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>High Level Complicated Owl</title>
        <meta property="og:title" content="High Level Complicated Owl" />
      </Helmet>
      <DataProvider
        renderSuccess={(params) => (
          <Repeater
            items={params}
            renderItem={(context_kvxnvy) => (
              <fragment>
                <h1>{context_kvxnvy?.Name}</h1>
              </fragment>
            )}
          />
        )}
      />
    </div>
  )
}

export default Home
