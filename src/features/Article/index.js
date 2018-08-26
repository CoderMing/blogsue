import React, { Component } from 'react'
import { getIssue } from '../../utils/github'
import Markdown from 'react-markdown'
import { Icon, Button } from '@blueprintjs/core'
import dayjs from 'dayjs'

import './article.styl'

export default class extends Component {
  state = {
    issueData: {}
  }
  render() {
    const { body, title, user, comments, createTime } = this.state.issueData
    return (
      <div className="article-container">
        <div className="con-info">
          <h1 className="title">{title}</h1>
          {user && (
            <p className="info" if={user}>
              作者：
              <a href={user.html_url}>{user.login}</a>
              <span class="blank" />
              创建时间：
              {createTime.format('YYYY-MM-DD')}
              <span class="blank" />
              讨论次数：
              {comments}
            </p>
          )}
        </div>
        <Markdown className="markdown-body" source={body} />
      </div>
    )
  }
  componentWillMount() {
    getIssue(this.props.id).then(res => {
      this.setState({
        issueData: {
          ...res.data,
          createTime: dayjs(res.data.created_at),
          updateTime: dayjs(res.data.updated_at)
        }
      })
    })
  }
}
