import React, { Component } from 'react'
import { listIssues } from '../../utils/github'

export default class Article extends Component {
  state = {
    data: '123'
  }

  render() {
    return (
      <div>
        <section />
        12312312
      </div>
    )
  }

  async componentDidMount() {
    let issues = await listIssues({
      page: 1
    })
    console.log(issues)
  }
}
