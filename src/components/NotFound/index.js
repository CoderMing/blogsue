import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import icon from '../../assets/img/404.svg'

import './sectionItem.styl'

export default class extends Component {
  render() {
    return (
      <div className="not-found">
        <img src={icon} alt="404" className="not-f-icon" />
        <div>页面找不到了 QAQ</div>
        <Link to="/">
          <div>点此返回首页 ></div>
        </Link>
      </div>
    )
  }
}
