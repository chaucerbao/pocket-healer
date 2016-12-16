// Dependencies
import Skill from 'stores/skills/Skill'
import { randomNumberBetween, weightedRandomFrom } from 'libs/utils'

// Store
class BasicAttack extends Skill {
  damageRange: []

  applyTo (targets) {
    const damage = randomNumberBetween(this.damageRange[0] * 100, this.damageRange[1] * 100) / 100
    const target = weightedRandomFrom(targets)

    target.takeDamage(damage)
  }
}

export default BasicAttack
