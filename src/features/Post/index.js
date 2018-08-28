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
            <Link to={`/article/${el.number}`} key={index}>
              <div className="post-item">
                <h3>
                  <big>{el.title}</big>
                </h3>
                <div className="item-body">
                  {el.body.length > 200
                    ? el.body.substring(0, 200) + '...'
                    : el.body}
                </div>
                <div className="item-info">
                  作者：
                  {el.user.login}
                  <span className="padding-line" />
                  创建时间：
                  {el.created_at.substring(0, 10)}
                </div>
                <div className="item-labels">
                  {el.labels.map((el, _index) => (
                    <span
                      className="label-item"
                      // style={{
                      //   background: `#${el.color}`
                      // }}
                      key={_index}>
                      #{el.name}
                    </span>
                  ))}
                </div>
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
