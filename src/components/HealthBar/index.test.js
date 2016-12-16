/* eslint-env mocha */

// Dependencies
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

// Component
import HealthBar from './index'

describe('<HealthBar />', () => {
  let instance

  before(() => {
    instance = shallow(<HealthBar />)
  })

  it('renders', () => {
    assert.ok(instance.containsMatchingElement(<h1>HealthBar</h1>))
  })
})
