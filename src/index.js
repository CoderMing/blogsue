import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import extendCreateStore from './store/extendCreateStore'
import { createMemoryHistory, Router } from 'react-router' // Browser history 是由 React Router 创建浏览器应用推荐的 history
import routes from './routers/index'
import reducer from './reducers/index'
import { syncHistoryWithStore } from 'react-router-redux'

const store = extendCreateStore(reducer)

const hashHistory = createMemoryHistory(window.location)

const extendHistory = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider>
    <Router history={extendHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
