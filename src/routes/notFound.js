import React from 'react'

import NotFound from '../components/NotFound'

import _config from '../config'

export default () => {
  window.document.title = `页面不存在 - ${_config.titleSuffix}`

  return (
    <React.Fragment>
      <NotFound />
    </React.Fragment>
  )
}
