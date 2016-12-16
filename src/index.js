// Dependencies
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { useStrict } from 'mobx'

// Router
import Router from './Router'

// Stores
import Player from 'stores/Player'
import Town from 'stores/Town'
import Dungeon from 'stores/Dungeon'
import Arena from 'stores/Arena'

const stores = {
  player: new Player(),
  town: new Town(),
  dungeon: new Dungeon(),
  arena: new Arena()
}

useStrict(true)

// Attach the application
render(
  <Provider stores={stores}>
    { Router }
  </Provider>,

  document.getElementById('application')
)
