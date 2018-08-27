import React, { Component } from 'react'
import { listIssues } from '../../utils/github'
import { Link } from 'react-router-dom'
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
      <div className="post-container">
        {issueList.length &&
          issueList.map((el, index) => (
            <Link to={`/article/${el.number}`}>
              <div className="post-item" key={index}>
                <h3>{el.title}</h3>
              </div>
            </Link>
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
