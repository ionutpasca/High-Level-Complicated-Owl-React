import React from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './postspage-posts.css'

const PostspagePosts = (props) => {
  return (
    <div className="postspage-posts-container">
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
                <div className="postspage-posts-container1">
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

PostspagePosts.defaultProps = {
  postsEntities: [],
}

PostspagePosts.propTypes = {
  postsEntities: PropTypes.array,
}

export default PostspagePosts
