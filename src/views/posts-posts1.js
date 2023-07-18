import React from 'react'

import { DataProvider } from '@teleporthq/react-components'
import Markdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './posts-posts1.css'

const PostsPosts1 = (props) => {
  return (
    <div className="posts-posts1-container">
      <Helmet>
        <title>Posts1 - High Level Complicated Owl</title>
        <meta
          property="og:title"
          content="Posts1 - High Level Complicated Owl"
        />
      </Helmet>
      <DataProvider
        renderSuccess={(PostsEntity) => (
          <fragment>
            <div className="posts-posts1-container1">
              <h1>{PostsEntity?.Title}</h1>
              <span>{PostsEntity?.Preview}</span>
              <span>{PostsEntity?.slug}</span>
              <div className="posts-posts1-container2">
                <Markdown>{PostsEntity?.Content}</Markdown>
              </div>
            </div>
          </fragment>
        )}
        initialData={props.postsEntity}
        persistDataDuringLoading={true}
      />
    </div>
  )
}

PostsPosts1.defaultProps = {
  postsEntity: [],
}

PostsPosts1.propTypes = {
  postsEntity: PropTypes.array,
}

export default PostsPosts1
