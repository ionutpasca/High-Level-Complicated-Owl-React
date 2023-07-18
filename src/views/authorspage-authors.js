import React from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './authorspage-authors.css'

const AuthorspageAuthors = (props) => {
  return (
    <div className="authorspage-authors-container">
      <Helmet>
        <title>Authors - High Level Complicated Owl</title>
        <meta
          property="og:title"
          content="Authors - High Level Complicated Owl"
        />
      </Helmet>
      <DataProvider
        renderSuccess={(params) => (
          <Repeater
            items={params}
            renderItem={(AuthorsEntities) => (
              <fragment>
                <div className="authorspage-authors-container1">
                  <h1>{AuthorsEntities?.Name}</h1>
                  <span>{AuthorsEntities?.Name}</span>
                  <span>{AuthorsEntities?.Linkedin}</span>
                </div>
              </fragment>
            )}
          />
        )}
        initialData={props.authorsEntities}
        persistDataDuringLoading={true}
      />
    </div>
  )
}

AuthorspageAuthors.defaultProps = {
  authorsEntities: [],
}

AuthorspageAuthors.propTypes = {
  authorsEntities: PropTypes.array,
}

export default AuthorspageAuthors
