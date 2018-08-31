import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    const { count, plusOne } = this.props
    return (
      <div>
        <div onClick={plusOne}>{count}</div>
      </div>
    )
  }
}
