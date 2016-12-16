// Dependencies
import Teammate from 'stores/teammates/Teammate'

// Skills
import BasicAttack from 'stores/skills/BasicAttack'

// Store
class Tank extends Teammate {
  static type = 'Tank'

  names = [
    'Zangief'
  ]

  skills = [
    [new BasicAttack({
      name: 'Jab',
      description: 'A light punch for quick damage',
      castTime: 2000,
      damageRange: [0.5, 1]
    }), 3],
    [new BasicAttack({
      name: 'Strong',
      description: 'A medium punch that delivers average damage',
      castTime: 3000,
      damageRange: [1.5, 2]
    }), 2],
    [new BasicAttack({
      name: 'Fierce',
      description: 'A heavy punch that deals massive damage',
      castTime: 5000,
      damageRange: [2.5, 3]
    }), 1]
  ]

  incomingDamageMultiplier = 0.8

  constructor () {
    super()

    super.pickName()
  }
}

export default Tank
