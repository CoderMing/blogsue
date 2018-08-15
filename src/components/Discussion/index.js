import React, { Component } from 'react'
import Gitalk from 'gitalk'
import _config from '../../config'

import 'gitalk/dist/gitalk.css'

const gitalk = new Gitalk(_config.gitalk)

export default class Discussion extends Component {
  render () {
    return (
      <section id='gitalk-container'></section>
    )
  }

  componentDidMount () {
    gitalk.render('gitalk-container')
  }
}
