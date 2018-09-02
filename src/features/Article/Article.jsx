import React, { Component } from 'react'
import { getIssue } from '../../utils/github'
import Markdown from 'react-markdown'
import dayjs from 'dayjs'

import _config from '../../config'

import './article.styl'

export default class extends Component {
  state = {
    issueData: {}
  }
  render() {
    const { body, title, user, createTime } = this.state.issueData
    return (
      <div className="article-container">
        <div className="con-info">
          <h1 className="title">{title}</h1>
          {user && (
            <p className="info" if={user}>
              作者：
              <a href={user.html_url}>{user.login}</a>
              <span className="padding-line" />
              创建时间：
              {createTime.format('YYYY-MM-DD')}
              <span className="padding-line" />
              字数统计：
              {body.replace(/[*`-]|\(.*?\)/g, '').length}
              <span className="padding-line" />
              预计阅读需要
              {Math.round(body.replace(/[*`-]|\(.*?\)/g, '').length / 400)}
              分钟
            </p>
          )}
        </div>
        <Markdown className="markdown-body" source={body} />
      </div>
    )
  }

  async componentWillMount() {
    this.props.changeLoadingState(true)
    try {
      let res = await getIssue(this.props.id)
      if (res.data.state === 'closed') window.location.pathname = '/404'
      this.setState({
        issueData: {
          ...res.data,
          createTime: dayjs(res.data.created_at),
          updateTime: dayjs(res.data.updated_at)
        }
      })
      window.document.title =
        res.data.title + (_config.titleSuffix ? ` - ${_config.titleSuffix}` : '')

      this.props.changeLoadingState(false)
    } catch (e) {
      window.location.pathname = '/404'
    }
  }
}
