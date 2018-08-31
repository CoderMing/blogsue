import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import registerServiceWorker from './common/registerServiceWorker'
import configureStore from './common/configureStore'
import reducer from './reducers'
import RootRouter from './common/rootRouter'

const store = configureStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <RootRouter />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
