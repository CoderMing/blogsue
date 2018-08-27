import React, { Component } from 'react'
import { listIssues } from '../../utils/github'
// import Markdown from 'react-markdown'
// import dayjs from 'dayjs'

import './post.styl'

export default class extends Component {
  state = {
    issueList: {}
  }
  render() {
    const { issueList } = this.state
    return (
      <div className="article-container">
        {issueList.length &&
          issueList.map((el, index) => (
            <div className="post-item">
              <h3>{el.title}</h3>
            </div>
          ))}
      </div>
    )
  }
  async componentWillMount() {
    this.setState({
      issueList: (await listIssues({ page: this.props.page })).data
    })
  }
}
