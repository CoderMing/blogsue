import React, { Component } from 'react'
import { Icon } from '@blueprintjs/core'
import SectionItem from '../../components/SectionItem'
import { getUser } from '../../utils/github'
import BlankSection from './BlankSection.jsx'
import LabelSection from './LabelSection.jsx'

import './linkSection.styl'

import _config from '../../config'

export default class extends Component {
  state = {
    userInfo: {}
  }
  render() {
    const { linkSections } = _config
    return (
      <div>
        <LabelSection />
        {linkSections.map((el, index) => (
          <SectionItem key={index}>
            <div className="link-sec">
              <h3>{el.title}</h3>
              {el.linkList.map((el, index) => {
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
        ))}
        <BlankSection />
      </div>
    )
  }

  async componentWillMount() {
    let userInfo = (await getUser(_config.user)).data
    this.setState({
      userInfo
    })
    this.props.updateUserInfo(userInfo)
  }
}
