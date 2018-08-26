import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button } from '@blueprintjs/core'

import _config from '../../config'

export default class Discussion extends Component {
  render() {
    return (
      <Navbar className="bp3-dark">
        <div id="nav-content">
          <Navbar.Group align="left" className="nav-content">
            <Navbar.Heading>{_config.title}</Navbar.Heading>
            <Navbar.Divider />
            <Link to="/home">
              <Button className="bp3-minimal" icon="home" text="Home" />
            </Link>
            <Link to="/article">
              <Button className="bp3-minimal" icon="document" text="Files" />
            </Link>
            <Link to="/about">
              <Button className="bp3-minimal" icon="document" text="Files" />
            </Link>
          </Navbar.Group>
          <Navbar.Group align="right" className="nav-content">
            <Navbar.Heading>
              <span>{_config.description}</span>
            </Navbar.Heading>
          </Navbar.Group>
        </div>
      </Navbar>
    )
  }
}
