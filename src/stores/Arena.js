// Dependencies
import { observable, computed, action } from 'mobx'

// Store
class Arena {
  @observable boss
  @observable player
  @observable recruits = []

  @computed get team () {
    return this.recruits.concat(this.player)
  }

  @computed get npcs () {
    return this.recruits.concat(this.boss)
  }

  @computed get participants () {
    return this.recruits.concat(this.player).concat(this.boss)
  }

  @computed get didPlayerWin () {
    const { boss } = this
    const isTeamAlive = this.team.map(member => member.isAlive).reduce((previous, current) => previous || current, false)

    let didPlayerWin

    if (isTeamAlive && boss.isDead) {
      // Player wins
      didPlayerWin = true
    } else if (boss.isAlive && !isTeamAlive) {
      // Boss wins
      didPlayerWin = false
    }

    return didPlayerWin
  }

  @action enter (boss, player, recruits) {
    this.player = player

    // Recruits target the boss
    recruits.forEach(recruit => recruit.setTargets([boss]))

    this.recruits = recruits

    // Boss targets the team
    boss.setTargets(this.team)

    this.boss = boss
  }

  start () {
    this.participants.map(actor => actor.reset())
    this.npcs.map(npc => npc.attack())
  }

  stop () {
    this.npcs.map(npc => npc.halt())
  }
}

export default Arena
