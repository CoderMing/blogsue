import React, { Component } from 'react'
import SectionItem from '../../components/SectionItem'
import { Link } from 'react-router-dom'

import './labelSection.styl'

import _config from '../../config'

export default class extends Component {
  state = {
    userInfo: {}
  }
  render() {
    const { labelCloud } = _config
    return (
      <SectionItem>
        <h3 className="label-sec-title">标签云</h3>
        {labelCloud &&
          labelCloud.map((el, index) => (
            <Link key={index} to={`/labels/${el}`}>
              <span className="label-sec-item">{el}</span>
            </Link>
          ))}
      </SectionItem>
    )
  }
}
