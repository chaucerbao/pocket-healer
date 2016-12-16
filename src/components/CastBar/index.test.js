/* eslint-env mocha */

// Dependencies
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

// Component
import CastBar from './index'

describe('<CastBar />', () => {
  let instance

  before(() => {
    instance = shallow(<CastBar />)
  })

  it('renders', () => {
    assert.ok(instance.containsMatchingElement(<h1>CastBar</h1>))
  })
})
