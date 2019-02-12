import React, { Component } from 'react'
import { listIssues } from '../../utils/github'
import { Link } from 'react-router-dom'
import { Button } from '@blueprintjs/core'
import removeMd from 'remove-markdown'
// import Markdown from 'react-markdown'
// import dayjs from 'dayjs'

import './post.styl'

export default class extends Component {
  state = {
    issueList: [],
    nextPageLength: 0
  }

  render() {
    const { issueList } = this.state
    const getShortcut = str => {
      let plainParagraphArr = removeMd(str.substring(0, 600)).split('\n')
      plainParagraphArr.length = 2
      let plainPostInfo = plainParagraphArr.join('\n')
      return plainPostInfo.length < 150 ? plainPostInfo : `${plainPostInfo.substring(0, 150)}......`
    }
    return (
      <div className="post-container">
        {this.props.label && (
          <div className="filter-info">
            “{this.props.label && this.props.label.replace('_&_', '/')}
            ”标签的搜索结果
          </div>
        )}
        {+this.props.page > 1 && <div className="filter-info">第 {this.props.page} 页</div>}
        {issueList.length !== 0 &&
          issueList.map((el, index) => (
            <Link to={`/article/${el.number}`} key={index}>
              <div className="post-item">
                <h3>
                  <big>{el.title}</big>
                </h3>
                <div className="item-info">
                  作者：
                  {el.user.login}
                  <span className="padding-line" />
                  创建时间：
                  {el.created_at.substring(0, 10)}
                  {el.comments !== 0 && (
                    <React.Fragment>
                      <span className="padding-line" />
                      已有
                      {el.comments}
                      条讨论
                    </React.Fragment>
                  )}
                </div>
                <div className="item-labels">
                  {el.labels.map((el, _index) => (
                    <span key={_index} className="label-item">
                      #{el.name}
                    </span>
                  ))}
                </div>
                <div className="item-body">{getShortcut(el.body)}</div>
              </div>
            </Link>
          ))}
        <div className="post-changer">
          {this.state.page > 1 && (
            <Link
              to={`/${this.props.label ? `label/${this.props.label}` : 'post'}/${this.state.page -
                1}`}
              className="changer-left">
              <Button type="button" className="bp3-minimal bp3-large" icon="chevron-left">
                前一页
              </Button>
            </Link>
          )}
          {!!this.state.nextPageLength && (
            <Link
              to={`/${this.props.label ? `label/${this.props.label}` : 'post'}/${this.state.page +
                1}`}
              className="changer-right">
              <Button type="button" className="bp3-minimal bp3-large" rightIcon="chevron-right">
                后一页
              </Button>
            </Link>
          )}
        </div>
      </div>
    )
  }

  async updateComponent(props) {
    if (!+props.page) window.location.pathname = '/404'
    this.setState(
      {
        page: +props.page
      },
      async () => {
        let issueData = (await listIssues({
          page: this.state.page,
          labels: props.label && props.label.replace('_&_', '/')
        })).data
        if (issueData.length === 0) window.location.pathname = '/404'
        this.setState({
          issueList: issueData
        })
        this.props.changeLoadingState(false)
        // 分开运行，避免页面阻塞
        this.setState({
          nextPageLength: (await listIssues({ page: this.state.page + 1 })).data.length
        })
      }
    )
  }

  async componentWillMount() {
    this.props.changeLoadingState(true)
    await this.updateComponent.call(this, this.props)
  }

  async componentWillReceiveProps(props) {
    if (this.props.page !== props.page || this.props.label !== props.label) {
      this.props.changeLoadingState(true)
      document.documentElement.scrollTop = 0
      await this.updateComponent.call(this, props)
    }
  }
}
