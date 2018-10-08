import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Button } from '@blueprintjs/core'
import QRCode from 'qrcode.react'
import ChangeMode from './ConnectChangeMode'

import uptDownIcon from '../../assets/img/put-down.svg'

import _config from '../../config'

export default class extends Component {
  state = {
    isPullDown: false
  }

  render() {
    const { navItem } = _config
    const { isPullDown } = this.state
    return (
      <div id="header-container" className="bp3-dark">
        <Navbar>
          <div id="nav-content">
            <img
              src={uptDownIcon}
              alt="pull-down"
              className={`phone-pull-down ${isPullDown ? 'show-list' : ''}`}
              onClick={this.phonePullDown}
            />
            <Navbar.Group align="left" className={`nav-content ${isPullDown ? 'show-list' : ''}`}>
              <Navbar.Heading>
                <Link to="/">{_config.title}</Link>
              </Navbar.Heading>
              <Navbar.Divider />
              {navItem &&
                navItem.map((el, index) => {
                  if (el.url) {
                    return (
                      <a href={el.url} key={index}>
                        <Button className="bp3-minimal" icon={el.icon} text={el.name} />
                      </a>
                    )
                  } else
                    return (
                      <Link to={el.to} key={index}>
                        <Button className="bp3-minimal" icon={el.icon} text={el.name} />
                      </Link>
                    )
                })}
            </Navbar.Group>
            <Navbar.Group align="right" className={`nav-content ${isPullDown ? 'show-list' : ''}`}>
              <Navbar.Heading>
                <ChangeMode />
                <Button
                  className="bp3-minimal qr-button mobile-hidden"
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

  phonePullDown = () => {
    this.setState({
      isPullDown: !this.state.isPullDown
    })
  }
}
