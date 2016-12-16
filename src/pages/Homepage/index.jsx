// Dependencies
import React from 'react'
import { Link } from 'react-router'

// Styles
import style from './style.css'

// Component
const Homepage = () => (
  <div className={style.tag}>
    <h1>Homepage</h1>

    <Link to='/prepare'>Start</Link>
  </div>
)

export default Homepage
