import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import AuthorsAuthors from './views/authors-authors'
import AuthorspageAuthors from './views/authorspage-authors'
import PostsPosts from './views/posts-posts'
import PostspagePosts from './views/postspage-posts'
import AuthorsAuthors1 from './views/authors-authors1'
import PostsPosts1 from './views/posts-posts1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={AuthorsAuthors} exact path="/authors-authors" />
        <Route
          component={AuthorspageAuthors}
          exact
          path="/authorspage-authors"
        />
        <Route component={PostsPosts} exact path="/posts-posts" />
        <Route component={PostspagePosts} exact path="/postspage-posts" />
        <Route component={AuthorsAuthors1} exact path="/authors" />
        <Route component={PostsPosts1} exact path="/posts" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
