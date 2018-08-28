import React, { Component } from 'react'
import { Icon } from '@blueprintjs/core'
import SectionItem from '../../components/SectionItem'
import { getUser } from '../../utils/github'

import './linkSection.styl'

import _config from '../../config'

export default class extends Component {
  state = {
    userInfo: {}
  }
  render() {
    const { linkSection } = _config
    return (
      <SectionItem>
        <div className="link-sec">
          <h3>{linkSection.title}</h3>
          {linkSection.linkList.map((el, index) => {
            return (
              <div className="link-sec-item" key={index}>
                <Icon icon="link" />
                <a target="_blank" href={el.href}>
                  {el.name}
                </a>
              </div>
            )
          })}
        </div>
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