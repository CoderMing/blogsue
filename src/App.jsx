import React, { Component } from 'react'

import Gitalk from './components/Gitalk'
import Article from './components/Article'

import './styles/app.styl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gitalk></Gitalk>
        <Article></Article>
      </div>
    );
  }
}

export default App