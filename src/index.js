import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './styles/app.styl';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

