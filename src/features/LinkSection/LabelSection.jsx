import React, { Component } from 'react'
import SectionItem from '../../components/SectionItem'
import { Link } from 'react-router-dom'
import { InputGroup } from '@blueprintjs/core'
import { listLabels } from '../../utils/github'

import './labelSection.styl'

export default class extends Component {
  state = {
    userInfo: {},
    labelCloud: [],
    labelFilter: ''
  }

  render() {
    const { labelCloud, labelFilter } = this.state
    return (
      <SectionItem>
        <h3 className="label-sec-title">标签云</h3>
        <InputGroup
          className="label-sec-input"
          disabled={false}
          large={false}
          onChange={this.filterLabels}
          leftIcon="filter"
          placeholder="查找标签..."
        />
        {labelCloud.length !== 0 &&
          labelCloud
            .filter(el => el.name.toLowerCase().match(labelFilter.toLowerCase()))
            .map((el, index) => (
              <Link key={index} to={`/label/${el.name}`} className="label-sec-item">
                #{el.name}
              </Link>
            ))}
      </SectionItem>
    )
  }

  filterLabels = e => {
    this.setState({
      labelFilter: e.target.value
    })
  }

  async componentDidMount() {
    let res = await listLabels()
    console.log(res)
    this.setState({
      labelCloud: res.data
    })
  }
}
