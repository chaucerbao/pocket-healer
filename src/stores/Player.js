// Dependencies
import { observable, action } from 'mobx'
import Actor from './Actor'

// Store
class Player extends Actor {
  name = 'Healer'

  @observable level = 1

  @action levelUp () {
    this.level += 1
  }

  @observable spells = []
}

export default Player
