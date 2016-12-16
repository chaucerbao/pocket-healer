// Dependencies
import React from 'react'
import { Link } from 'react-router'
import { inject, observer } from 'mobx-react'

// Components
import UnitFrame from 'components/UnitFrame'
import Modal from 'components/Modal'

// Styles
import style from './style.css'

// Component
const Battle = inject('stores', 'router')(observer(({ stores, router }) => {
  const { player, arena } = stores
  const { boss, team } = arena

  let showModal = false

  switch (arena.didPlayerWin) {
    case true:
      arena.stop()
      showModal = true
      player.levelUp()
      break
    case false:
      arena.stop()
      showModal = true
      break
    default:
  }

  return (
    <div className={style.tag}>
      <h1>Battle</h1>

      <UnitFrame actor={boss} />

      <ul>
        { team.map((member, i) =>
          <li key={i} className={style.teammate}>
            <UnitFrame actor={member} />
          </li>
        ) }
      </ul>

      <Modal isOpen={showModal}>
        {arena.didPlayerWin && (
          <div>
            <h2>Good job!</h2>
            <p>You've destroyed the {boss.name}. Roll for loot and carry on.</p>
          </div>
        )}

        {!arena.didPlayerWin && (
          <div>
            <h2>Wiped out...</h2>
            <p>Blame your teammates, then head back to town and find new ones.</p>
          </div>
        )}

        <Link to='/prepare'>Onward</Link>
      </Modal>
    </div>
  )
}))

export default Battle
