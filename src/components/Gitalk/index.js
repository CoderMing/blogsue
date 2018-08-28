import React, { Component } from 'react'
import Gitalk from 'gitalk'
import _config from '../../config'

import 'gitalk/dist/gitalk.css'
import './gitalk.styl'

export default class extends Component {
  render() {
    return <section id="gitalk-container" />
  }

  componentDidMount() {
    const { user, repo, clientID, clientSecret } = _config
    const gitalk = new Gitalk({
      labels: [],
      ..._config.gitalk,
      number: +this.props.id,
      owner: user,
      repo,
      clientID,
      clientSecret,
      admin: [user]
    })

    gitalk.render('gitalk-container')
  }
}
