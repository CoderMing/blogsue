import React from 'react'
import SectionItem from '../../components/SectionItem'
import { Link } from 'react-router-dom'
import { InputGroup } from '@blueprintjs/core'
import { listLabels } from '../../utils/github'

import './labelSection.styl'

export default class extends React.PureComponent {
  state = {
    userInfo: {},
    labelCloud: [],
    labelFilter: ''
  }

  render() {
    const { labelCloud, labelFilter } = this.state

    const labelFilterConfig = {
      className: 'label-sec-input',
      disabled: false,
      large: false,
      onChange: this.filterLabels,
      leftIcon: 'filter',
      placeholder: '查找标签...'
    }

    return (
      <SectionItem>
        <h3 className="label-sec-title">标签云</h3>
        <InputGroup {...labelFilterConfig} />
        {labelCloud.length !== 0 &&
          labelCloud
            .filter(el => el.name.toLowerCase().match(labelFilter.toLowerCase()))
            .map((el, index) => (
              <Link
                key={index}
                to={`/label/${el.name && el.name.replace('/', '_&_')}`}
                className="label-sec-item">
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
    this.setState({
      labelCloud: res.data
    })
  }
}
