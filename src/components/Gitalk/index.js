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
    const gitalk = new Gitalk({
      number: +this.props.id,
      ..._config.gitalk
    })

    gitalk.render('gitalk-container')
  }
}
