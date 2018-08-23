import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import reducer from './reducers/index'
import App from './App.jsx'

const store = configureStore(reducer)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
