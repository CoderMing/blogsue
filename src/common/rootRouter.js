import React from 'react'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from '../features/Nav'
import homeRoute from '../routes/home'
import articleRoute from '../routes/article'
import Footer from '../features/Footer'
import './global.styl'

const Router = process.env.ROUTE_MODE !== 'hash' ? BrowserRouter : HashRouter

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
            <Route exact path="/" component={homeRoute} />
            <Route path="/post/:page" component={homeRoute} />
            <Route path="/article/:id" component={articleRoute} />
            <Footer />
          </div>
        </Router>
      )
    }
  }
)
