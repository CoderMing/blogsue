import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import registerServiceWorker from './common/registerServiceWorker'
import configureStore from './common/configureStore'
import reducer from './reducers'
import RootRouter from './common/RootRouter'
import _config from './config'

const store = configureStore(reducer)

const { title, titleSuffix } = _config
const { document } = window
document.title = title ? `${title + (titleSuffix ? ` - ${titleSuffix}` : '')}` : document.title

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById('root')
)

if (_config.isUseServiceWorker) registerServiceWorker()
