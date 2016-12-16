// Dependencies
import React from 'react'
import { observer } from 'mobx-react'

// Styles
import style from './style.css'

// Component
const CastBar = observer(({ actor }) => {
  const { activeSkill: skill, isAttacking } = actor
  const tagClasses = [style.tag, isAttacking ? '' : style.reset].filter(Boolean).join(' ')

  let name
  let castTime

  if (isAttacking) {
    name = skill.name
    castTime = skill.castTime
  }

  return (
    <div className={tagClasses}>
      <div className={style.name}>{ name }</div>

      <div className={style.current} style={{ transitionDuration: castTime + 'ms' }} />
    </div>
  )
})

export default CastBar
