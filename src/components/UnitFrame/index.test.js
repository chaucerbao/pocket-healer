/* eslint-env mocha */

// Dependencies
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

// Component
import UnitFrame from './index'

describe('<UnitFrame />', () => {
  let instance

  before(() => {
    instance = shallow(<UnitFrame />)
  })

  it('renders', () => {
    assert.ok(instance.containsMatchingElement(<h1>UnitFrame</h1>))
  })
})
