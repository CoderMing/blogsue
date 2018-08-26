import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Elevation } from '@blueprintjs/core'
import Gitalk from '../gitalk/Gitalk'

import _config from '../../config'

export default class SectionLeft extends Component {
  render() {
    return (
      <section id="section-left" className="section-item">
        <Gitalk />
      </section>
    )
  }
}
