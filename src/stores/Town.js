// Teammates
import Tank from 'stores/teammates/Tank'
import Dps from 'stores/teammates/Dps'

// Store
class Town {
  recruits = [Tank, Dps]

  recruit (type) {
    let teammate

    switch (type) {
      case Tank.type:
        teammate = new Tank()
        break
      case Dps.type:
        teammate = new Dps()
        break
      default:
    }

    return teammate
  }
}

export default Town
