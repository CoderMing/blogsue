import React, { Component } from 'react'
import { Switch, Link } from 'react-router-dom'
export default class Discussion extends Component {
  render() {
    return (
      <header id="header">
        <ul>
          <Link to="/1" />
          <Link to="/2" />
          <Link to="/3" />
          <Link to="/4" />
          <Link to="/5" />
          <Switch />
        </ul>
      </header>
    )
  }
}
