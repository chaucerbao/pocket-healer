// Dependencies
import Teammate from 'stores/teammates/Teammate'

// Skills
import BasicAttack from 'stores/skills/BasicAttack'

// Store
class Dps extends Teammate {
  static type = 'DPS'

  names = [
    'Cammy'
  ]

  skills = [
    [new BasicAttack({
      name: 'Short',
      description: 'A light kick for quick damage',
      castTime: 2000,
      damageRange: [1, 2]
    }), 3],
    [new BasicAttack({
      name: 'Forward',
      description: 'A medium kick that delivers average damage',
      castTime: 3000,
      damageRange: [3, 4]
    }), 2],
    [new BasicAttack({
      name: 'Roundhouse',
      description: 'A heavy kick that deals massive damage',
      castTime: 5000,
      damageRange: [5, 6]
    }), 1]
  ]

  incomingDamageMultiplier = 1.2

  constructor () {
    super()

    super.pickName()
  }
}

export default Dps
