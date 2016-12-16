// Dependencies
import React from 'react'
import { observer } from 'mobx-react'

// Components
import HealthBar from 'components/HealthBar'
import CastBar from 'components/CastBar'

// Styles
import style from './style.css'

// Component
const UnitFrame = observer(({ actor }) => {
  return (
    <div className={style.tag}>
      <HealthBar actor={actor} />
      <CastBar actor={actor} />
    </div>
  )
})

export default UnitFrame
