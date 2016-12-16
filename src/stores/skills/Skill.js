// Store
class Skill {
  name = ''
  description = ''
  castTime = 0

  constructor (options) {
    Object.assign(this, options)
  }

  applyTo (targets) {
  }
}

export default Skill
