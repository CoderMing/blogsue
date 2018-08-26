import React, { Component } from 'react'
import { listIssues, getIssue } from '../../utils/github'

export default class extends Component {
  state = {
    inner: 'hello!'
  }
  render() {
    return <div>{this.state.inner}</div>
  }
  componentWillMount() {
    getIssue(this.props.id).then(res => {
      console.log(res)
      this.setState({
        inner: res.data.body
      })
    })
  }
}
