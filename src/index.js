import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import extendCreateStore from './store/extendCreateStore'
import App from './App.jsx'

// const store = extendCreateStore()

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
