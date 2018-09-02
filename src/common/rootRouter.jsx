import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from '../features/Nav'
import homeRoute from '../routes/home'
import articleRoute from '../routes/article'
import notFoundRoute from '../routes/notFound'
import Footer from '../features/Footer'
import './global.styl'

const Router = process.env.ROUTE_MODE === 'hash' ? HashRouter : BrowserRouter

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
            <Nav />
            <Switch>
              <Route exact path="/" component={homeRoute} />
              <Route path="/post/:page" component={homeRoute} />
              <Route path="/article/:id" component={articleRoute} />
              <Route component={notFoundRoute} />
            </Switch>
            <Footer />
          </div>
        </Router>
      )
    }
  }
)
