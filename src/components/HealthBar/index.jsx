// Dependencies
import React from 'react'
import { observer } from 'mobx-react'

// Styles
import style from './style.css'

// Component
const HealthBar = observer(({ actor }) => {
  const { name, healthPercentage, isAlive } = actor
  const tagClasses = [style.tag, isAlive ? style.isAlive : ''].filter(Boolean).join(' ')

  return (
    <div className={tagClasses}>
      <div className={style.name}>{ name }</div>
      <div className={style.percentage}>{ healthPercentage }%</div>

      <div className={style.current} style={{ width: healthPercentage + '%' }} />
    </div>
  )
})

export default HealthBar
