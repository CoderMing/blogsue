import React, { Component } from 'react'
import RootRouter from './common/rootRouter'
import Count from './features/count/connectedCount'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Count />
        <RootRouter />
      </div>
    )
  }
}

export default App
