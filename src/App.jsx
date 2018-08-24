import React, { Component } from 'react'

import Gitalk from './components/Gitalk'
import Article from './components/Article'
import Count from './containers/Count'
import './styles/app.styl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gitalk></Gitalk>
        <Article></Article>
        <Count></Count>
      </div>
    );
  }
}

export default App