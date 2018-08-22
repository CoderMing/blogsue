import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App.jsx'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
