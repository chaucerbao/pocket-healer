// Dependencies
import React from 'react'

// Styles
import style from './style.css'

// Component
const Application = ({ children }) => (
  <div className={style.tag}>
    <header className={style.header}>
      Site Header
    </header>

    <main className={style.body}>
      {children}
    </main>

    <footer className={style.footer}>
      Site Footer
    </footer>
  </div>
)

export default Application
