// Bosses
import KillerRabbit from 'stores/bosses/KillerRabbit'

// Store
class Dungeon {
  bosses = [
    new KillerRabbit()
  ]

  getBoss (level) {
    return this.bosses[level - 1]
  }
}

export default Dungeon
