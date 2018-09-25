import React, { Component } from 'react'

import './netEaseMusic.styl'

export default class extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={className}>
        <iframe
          id="netease-music"
          title="netEaseMusic"
          frameBorder="no"
          border="0"
          marginWidth="0"
          marginHeight="0"
          width="317"
          height="86"
          src="//music.163.com/outchain/player?type=2&id=1711024&auto=1&height=66"
        />
      </div>
    )
  }

  shouldComponentUpdate() {
    return false
  }

  componentDidUpdate() {
    console.log('12312312')
  }
  componentDidMount() {}
}
