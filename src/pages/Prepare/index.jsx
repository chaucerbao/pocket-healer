// Dependencies
import React from 'react'
import { inject, observer } from 'mobx-react'

// Styles
import style from './style.css'

// Component
const Prepare = inject('stores', 'router')(observer(({ stores, router }) => {
  const { player, town, dungeon, arena } = stores
  const boss = dungeon.getBoss(player.level)
  const { recruits } = town

  let roster

  function fight () {
    const recruits = []

    // Recruit teammates
    roster.querySelectorAll('input:checked').forEach(input => recruits.push(town.recruit(input.value)))

    // Send everyone to the arena
    arena.enter(boss, player, recruits)

    // Start the battle
    arena.start()
    router.push('battle')
  }

  return (
    <div className={style.tag}>
      <h1>Prepare</h1>

      <h2>Boss</h2>
      <div className={style.boss}>
        <div className={style.bossName}>{boss.name}</div>

        <p>{boss.description}</p>
      </div>

      <h2>Recruit</h2>
      <ul ref={component => (roster = component)}>
        { [0, 1, 2, 3].map(i => {
          const name = `teammate[${i}]`

          return (
            <li key={name} className={style.recruit}>
              { recruits.map(recruit => {
                const id = `${name}_${recruit.type}`
                const isChecked = (recruit.type === 'Tank' && i === 0) || (recruit.type !== 'Tank' && i > 0)

                return (
                  <span key={id} className={style.teammate}>
                    <input id={id} name={name} value={recruit.type} type='radio' defaultChecked={isChecked} /><label className={style.teammate} htmlFor={id}>{recruit.type}</label>
                  </span>
                )
              }) }
            </li>
          )
        }) }
      </ul>

      Selected spells
      <ul>
        <li>Spell 1</li>
        <li>Spell 2</li>
        <li>Spell 3</li>
        <li>Spell 4</li>
        <li>Spell 5</li>
      </ul>

      Full list of spells
      <ul>
        <li>Spell 1</li>
        <li>Spell 2</li>
        <li>Spell 3</li>
        <li>Spell 4</li>
        <li>Spell 5</li>
        <li>Spell 6</li>
        <li>Spell 7</li>
        <li>Spell 8</li>
      </ul>

      <button onClick={fight}>Fight!</button>
    </div>
  )
}))

export default Prepare
