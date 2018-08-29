import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button } from '@blueprintjs/core'
import QRCode from 'qrcode.react'

import _config from '../../config'

export default class extends Component {
  render() {
    return (
      <div id="header-container">
        <Navbar>
          <div id="nav-content">
            <Navbar.Group align="left" className="nav-content">
              <Navbar.Heading>{_config.title}</Navbar.Heading>
              <Navbar.Divider />
              <Link to="/">
                <Button className="bp3-minimal" icon="home" text="Home" />
              </Link>
              <Link to="/article/1">
                <Button className="bp3-minimal" icon="document" text="Files" />
              </Link>
              <a href="//coderming.com/resume">
                <Button
                  className="bp3-minimal"
                  icon="widget-header"
                  text="Resume"
                />
              </a>
            </Navbar.Group>
            <Navbar.Group align="right" className="nav-content">
              <Navbar.Heading>
                <Button
                  className="bp3-minimal qr-button"
                  rightIcon="caret-down"
                  text="本页二维码">
                  <QRCode
                    className="url-qr"
                    value={window.location.href}
                    bgColor="transparent"
                    level="M"
                    size={200}
                  />
                </Button>
              </Navbar.Heading>
            </Navbar.Group>
          </div>
        </Navbar>
      </div>
    )
  }
}
