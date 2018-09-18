import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Gitalk from '.'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter()
})

describe('Gitalk', function() {
  it('set props className', function() {
    const className = 'class'
    expect(shallow(<Gitalk className={className} />).hasClass(className)).toBe(false)
  })
})
