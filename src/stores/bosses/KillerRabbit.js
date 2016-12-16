// Dependencies
import Boss from 'stores/bosses/Boss'

// Skills
import BasicAttack from 'stores/skills/BasicAttack'

// Model
class KillerRabbit extends Boss {
  name = 'Killer Rabbit'

  description = 'A devious bunny rabbit with a killer appetite. It\'s coming straight for you!'

  skills = [
    [new BasicAttack({
      name: 'Nibble',
      description: 'Light and quick damage',
      castTime: 500,
      damageRange: [4, 8]
    }), 3],
    [new BasicAttack({
      name: 'Bite',
      description: 'Average damage',
      castTime: 1500,
      damageRange: [12, 16]
    }), 2],
    [new BasicAttack({
      name: 'Chomp',
      description: 'Massive damage',
      castTime: 3000,
      damageRange: [20, 24]
    }), 1]
  ]
}

export default KillerRabbit
