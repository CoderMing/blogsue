import React, { Component } from 'react'

import './loading.styl'
import './loadingKeyFrames.styl'

export default class extends Component {
  state = {
    status: this.props.loadingState
  }

  render() {
    const { status } = this.state
    return (
      <div id="loading-cover" className={status ? '' : 'loading-hide'}>
        <div className="line-scale-pulse-out-rapid loading-ani">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )
  }

  hideElement(tarStatus) {
    const element = document.querySelector('#loading-cover')
    if (tarStatus === true) {
      element.style.display = 'block'
    } else {
      //删掉元素 减少性能消耗
      setTimeout(() => {
        element.style.display = 'none'
      }, 3000)
    }
  }

  componentWillReceiveProps(targetProps) {
    this.setState({
      status: !this.state.status
    })
  }
}
