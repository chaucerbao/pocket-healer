/* eslint-env mocha */

// Dependencies
import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'

// Component
import Modal from './index'

describe('<Modal />', () => {
  let instance

  before(() => {
    instance = shallow(<Modal />)
  })

  it('renders', () => {
    assert.ok(instance.containsMatchingElement(<h1>Modal</h1>))
  })
})
