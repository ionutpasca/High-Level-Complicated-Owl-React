import React from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './posts-posts.css'

const PostsPosts = (props) => {
  return (
    <div className="posts-posts-container">
      <Helmet>
        <title>Posts - High Level Complicated Owl</title>
        <meta
          property="og:title"
          content="Posts - High Level Complicated Owl"
        />
      </Helmet>
      <DataProvider
        renderSuccess={(params) => (
          <Repeater
            items={params}
            renderItem={(PostsEntities) => (
              <fragment>
                <div className="posts-posts-container1">
                  <h1>{PostsEntities?.Title}</h1>
                  <span>{PostsEntities?.Title}</span>
                  <span>{PostsEntities?.Preview}</span>
                </div>
              </fragment>
            )}
          />
        )}
        initialData={props.postsEntities}
        persistDataDuringLoading={true}
      />
    </div>
  )
}

PostsPosts.defaultProps = {
  postsEntities: [],
}

PostsPosts.propTypes = {
  postsEntities: PropTypes.array,
}

export default PostsPosts
