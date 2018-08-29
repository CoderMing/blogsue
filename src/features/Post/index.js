import React, { Component } from 'react'
import { listIssues } from '../../utils/github'
import { Link } from 'react-router-dom'
import { Button } from '@blueprintjs/core'
// import Markdown from 'react-markdown'
// import dayjs from 'dayjs'

import './post.styl'

export default class extends Component {
  state = {
    issueList: {},
    nextPageLength: 0
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
        <div className="post-changer">
          <Link to={this.props.page} className="changer-left">
            <Button
              type="button"
              className="bp3-minimal bp3-large"
              icon="chevron-left">
              前一页
            </Button>
          </Link>
          {!!this.state.nextPageLength && (
            <Link to={this.props.page} className="changer-right">
              <Button
                type="button"
                className="bp3-minimal bp3-large"
                rightIcon="chevron-right">
                后一页
              </Button>
            </Link>
          )}
        </div>
      </div>
    )
  }
  async componentWillMount() {
    this.setState({
      issueList: (await listIssues({ page: this.props.page })).data
    })
    // 分开运行，避免页面阻塞
    this.setState({
      nextPageLength: (await listIssues({ page: this.props.page + 1 })).data
        .length
    })
  }
}
