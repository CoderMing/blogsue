import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button } from '@blueprintjs/core'
import SectionItem from '../../components/SectionItem'
import { getUser } from '../../utils/github'

import './userSection.styl'

import _config from '../../config'

export default class extends Component {
  state = {
    userInfo: {}
  }
  render() {
    const { avatar_url, name, followers_url } = this.props.userInfo
    const { isDark } = this.props
    const { description } = _config
    return (
      <SectionItem>
        {avatar_url && (
          <div className="user-sec-container">
            <img className="user-avator" alt="avator" src={avatar_url} />
            <h2 className="user-name">{name}</h2>
            <p className="user-desc">{description}</p>
            <hr />
            <Button
              icon="moon"
              className="bp3-fill"
              onClick={this.props.changePageColor}>
              {isDark ? '日间' : '夜间'}
              模式
            </Button>
          </div>
        )}
      </SectionItem>
    )
  }

  async componentWillMount() {
    let userInfo = (await getUser(_config.articleRepo.user)).data
    this.setState({
      userInfo
    })
    this.props.updateUserInfo(userInfo)
  }
}
