import React from 'react'
import { Button } from '@blueprintjs/core'

import _config from '../../config'

export default class ChangeMode extends React.Component {
  render() {
    const { isDark } = this.props

    const darkModeButtonConfig = {
      icon: isDark ? 'flash' : 'moon',
      className: 'change-mode-btn',
      onClick: this.props.changePageColor.bind(this, !_config.pageConfApi.get().isDarkMode)
    }

    return (
      <Button {...darkModeButtonConfig}>
        {' '}
        {isDark ? '日间' : '夜间'}
        模式{' '}
      </Button>
    )
  }

  componentWillMount() {
    this.props.changePageColor(_config.pageConfApi.get().isDarkMode)
  }
}
