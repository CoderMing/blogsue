import React, { Component } from 'react'

import './mainLayout.styl'

export default class extends Component {
  render() {
    return (
      <div id="content">
        <div className="content-item content-left">
          {this.props.children[0]}
        </div>
        <div className="content-item content-right">
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}
