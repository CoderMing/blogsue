import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// import Header from '../features/nav'
// import Gitalk from '../features/gitalk/Gitalk'
// import Article from '../features/article/Article'
// import { Button } from '@blueprintjs/core'
import homeRoute from '../routes/home'
import article from '../routes/article'

import './global.styl'

export default connect(state => {
  return {
    ...state.page
  }
})(
  class extends React.Component {
    render() {
      const { isDark } = this.props
      return (
        <Router>
          <div className={isDark ? 'bp3-dark' : ''} id="content-root">
            <Route exact path="/" component={homeRoute} />
            <Route path="/article/:id" component={article} />
            <Route path="/home" component={homeRoute} />
          </div>
        </Router>
      )
    }
  }
)
