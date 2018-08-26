import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Header from '../features/nav'
// import Gitalk from '../features/gitalk/Gitalk'
// import Article from '../features/article/Article'
// import { Button } from '@blueprintjs/core'
import homeRoute from '../routes/home'
import article from '../routes/article'

import './global.styl'

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={homeRoute} />
      <Route path="/article/:id" component={article} />
      <Route path="/home" component={homeRoute} />
    </div>
  </Router>
)
