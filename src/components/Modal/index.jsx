// Dependencies
import React from 'react'

// Styles
import style from './style.css'

// Component
const Modal = ({ isOpen, children }) => {
  const tagClasses = [style.tag, isOpen ? style.isOpen : ''].filter(Boolean).join(' ')

  return (
    <div className={tagClasses}>
      <div className={style.body}>
        {children}
      </div>

      <div className={style.overlay} />
    </div>
  )
}

export default Modal
