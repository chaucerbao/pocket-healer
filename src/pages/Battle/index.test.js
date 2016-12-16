/* eslint-env mocha */

// Dependencies
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

// Component
import Battle from './index'

describe('<Battle />', () => {
  let instance

  before(() => {
    instance = shallow(<Battle />)
  })

  it('renders', () => {
    assert.ok(instance.containsMatchingElement(<h1>Battle</h1>))
  })
})
