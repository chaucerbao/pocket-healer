// Dependencies
import Npc from 'stores/Npc'

// Store
class Teammate extends Npc {
  names = []

  pickName () {
    const { names } = this
    const randomIndex = Math.floor(Math.random() * names.length)

    this.name = names[randomIndex]
  }
}

export default Teammate
