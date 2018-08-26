import React, { Component } from 'react'
import RootRouter from './common/rootRouter'
import Count from './containers/Count'
import Gitalk from './features/gitalk/Gitalk'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Count />
        <RootRouter />
        {/* <Gitalk /> */}
      </div>
    )
  }
}

export default App
