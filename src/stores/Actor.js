// Dependencies
import { observable, computed, action } from 'mobx'

// Store
class Actor {
  name = ''

  // Health
  @observable health = 100
  maxHealth = 100
  incomingDamageMultiplier = 1

  @computed get healthPercentage () {
    return Math.round(this.health / this.maxHealth * 10000) / 100
  }

  @computed get isAlive () {
    return this.health > 0
  }

  @computed get isDead () {
    return this.health <= 0
  }

  @action takeDamage (amount) {
    this.health = Math.max(this.health - amount * this.incomingDamageMultiplier, 0)
  }

  @action healFor (amount) {
    this.health = Math.min(this.health + amount, this.maxHealth)
  }

  // Targets
  @observable targets = []

  @computed get liveTargets () {
    return this.targets.filter(target => !target[0].isDead)
  }

  @action setTargets (targets) {
    this.targets = targets.map(target => [target, target.constructor.type === 'Tank' ? 6 : 1])
  }

  // Skills
  skills = []
  @observable activeSkill

  @computed get isAttacking () {
    return this.activeSkill ? true : false
  }

  @action setActiveSkill (skill) {
    this.activeSkill = skill
  }

  // Reset
  @action reset () {
    this.health = this.maxHealth
  }
}

export default Actor
