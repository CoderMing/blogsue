import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Gitalk from '../components/Gitalk'
import Article from '../components/Article'

export default (
  <Router path="/" component='App'>
    <Route path='/article/:id' component={Article}></Route>
    <Route component={Gitalk}></Route>
  </Router>
)