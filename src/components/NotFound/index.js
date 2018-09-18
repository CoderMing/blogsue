import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pageConfApi from '../../common/pageConfApi'

import icon from '../../assets/img/404.svg'

import './sectionItem.styl'

export default class extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={className}>
        <div className="not-found">
          <img src={icon} alt="404" className="not-f-icon" />
          <div>页面找不到了 QAQ</div>
          <Link to="/">
            <div>点此返回首页 ></div>
          </Link>
        </div>
      </div>
    )
  }

  componentDidMount() {
    if (pageConfApi.get().isDarkMode === true)
      window.document.querySelector('#content-root').className = 'bp3-dark'
  }
}
