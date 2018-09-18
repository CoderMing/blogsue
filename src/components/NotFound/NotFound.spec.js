import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '.'

Enzyme.configure({
  adapter: new Adapter()
})

describe('NotFound', function() {
  it('set props className', function() {
    const className = 'class'
    expect(shallow(<NotFound className={className} />).hasClass(className)).toBe(true)
  })
})
