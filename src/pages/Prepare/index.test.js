/* eslint-env mocha */

// Dependencies
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

// Component
import Prepare from './index'

describe('<Prepare />', () => {
  let instance

  before(() => {
    instance = shallow(<Prepare />)
  })

  it('renders', () => {
    assert.ok(instance.containsMatchingElement(<h1>Prepare</h1>))
  })
})
