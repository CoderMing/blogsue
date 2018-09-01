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
