import React, { Component } from 'react'

import Discussion from './components/Discussion'
import Article from './components/Article'

import './styles/app.styl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Discussion></Discussion>
        <Article></Article>
      </div>
    );
  }
}

export default App