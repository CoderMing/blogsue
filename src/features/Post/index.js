import React, { Component } from 'react'
import { getIssue } from '../../utils/github'
import Markdown from 'react-markdown'
import dayjs from 'dayjs'

import './post.styl'

export default class extends Component {
  state = {
    issueData: {}
  }
  render() {
    const { body, title, user, createTime } = this.state.issueData
    return <div className="article-container">12312312</div>
  }
  componentWillMount() {}
}
