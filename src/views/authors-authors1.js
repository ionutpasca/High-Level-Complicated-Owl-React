import React from 'react'

import { DataProvider } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './authors-authors1.css'

const AuthorsAuthors1 = (props) => {
  return (
    <div className="authors-authors1-container">
      <Helmet>
        <title>Authors1 - High Level Complicated Owl</title>
        <meta
          property="og:title"
          content="Authors1 - High Level Complicated Owl"
        />
      </Helmet>
      <DataProvider
        renderSuccess={(AuthorsEntity) => (
          <fragment>
            <div className="authors-authors1-container1">
              <h1>{AuthorsEntity?.Name}</h1>
              <span>{AuthorsEntity?.Linkedin}</span>
              <span>{AuthorsEntity?.Twitter}</span>
            </div>
          </fragment>
        )}
        initialData={props.authorsEntity}
        persistDataDuringLoading={true}
      />
    </div>
  )
}

AuthorsAuthors1.defaultProps = {
  authorsEntity: [],
}

AuthorsAuthors1.propTypes = {
  authorsEntity: PropTypes.array,
}

export default AuthorsAuthors1
