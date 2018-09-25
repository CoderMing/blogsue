import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from '../features/Nav'
import homeRoute from '../routes/home'
import articleRoute from '../routes/article'
import notFoundRoute from '../routes/notFound'
import labelRoute from '../routes/label'
import Footer from '../features/Footer'
import NetEaseMusic from '../components/NetEaseMusic'
import './global.styl'

import _config from '../config'

const Router = process.env.ROUTE_MODE === 'hash' ? HashRouter : BrowserRouter

export default connect(state => {
  return {
    ...state.page
  }
})(
  class extends React.Component {
    render() {
      const { netEaseMusicID } = _config
      const { isDark } = this.props
      return (
        <React.Fragment>
          {netEaseMusicID && <NetEaseMusic id={netEaseMusicID} />}
          <Router>
            <div className={isDark ? 'bp3-dark' : ''} id="content-root">
              <Nav />
              <Switch>
                <Route exact path="/" component={homeRoute} />

                <Route path="/label/:label/:page" component={labelRoute} />
                <Route path="/label/:label" component={labelRoute} />

                <Route path="/post/:page" component={homeRoute} />

                <Route path="/article/:id" component={articleRoute} />

                <Route component={notFoundRoute} isDark={isDark} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </React.Fragment>
      )
    }
  }
)
