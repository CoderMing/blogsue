import React, { Component } from 'react'

import _config from '../../config'

import './footer.styl'

export default class Count extends Component {
  render() {
    const { footers } = _config
    return (
      <footer>
        {' '}
        <p className="footer-item">
          {footers &&
            footers.map((el, index) => (
              <span className="span-item" key={index} dangerouslySetInnerHTML={{ __html: el }} />
            ))}
        </p>
        <p className="footer-item">
          Powered by <a href="https://github.com/CoderMing/blogsue">Blogsue</a>
        </p>
      </footer>
    )
  }
}
