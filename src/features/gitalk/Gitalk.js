import React, { Component } from 'react'
import Gitalk from 'gitalk'
import _config from '../../config'

import 'gitalk/dist/gitalk.css'

const gitalk = new Gitalk(_config.gitalk)

export default class extends Component {
  render() {
    return <section id="gitalk-container" />
  }

  componentDidMount() {
    gitalk.render('gitalk-container')
  }
}
