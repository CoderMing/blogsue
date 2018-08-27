import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button } from '@blueprintjs/core'
import SectionItem from '../../components/SectionItem'
import { getUser } from '../../utils/github'

import _config from '../../config'

export default class extends Component {
  state = {
    userInfo: {}
  }
  render() {
    return (
      <SectionItem>
        <div>232</div>
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
