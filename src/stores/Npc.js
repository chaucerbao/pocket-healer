// Dependencies
import Actor from './Actor'
import { weightedRandomFrom } from 'libs/utils'

// Store
class Npc extends Actor {
  actionHandler

  attack () {
    const skill = weightedRandomFrom(this.skills)

    this.actionHandler = setTimeout(() => {
      if (this.isAlive && this.liveTargets.length) {
        skill.applyTo(this.liveTargets)
        this.attack()
        this.setActiveSkill(null)
      }
    }, skill.castTime)

    this.setActiveSkill(skill)
  }

  halt () {
    clearTimeout(this.actionHandler)
  }
}

export default Npc
