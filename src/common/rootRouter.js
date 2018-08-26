import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from '../features/nav'
import Gitalk from '../features/gitalk/Gitalk'
import Article from '../features/article/Article'

export default () => (
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Gitalk} />
      <Route path="/article/:id" component={Article} />
    </div>
  </Router>
)
