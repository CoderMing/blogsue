import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Discussion from './components/Discussion'

import './styles/app.styl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Discussion></Discussion>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

