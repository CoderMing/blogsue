import React, { Component } from 'react'

import './blankSection.styl'

import _config from '../../config'

export default class extends Component {
  state = {
    userInfo: {}
  }
  render() {
    const { blankSections } = _config
    return (
      <footer className="blank-sec">
        {blankSections &&
          blankSections.map((el, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: el }} />
          ))}
      </footer>
    )
  }
}
