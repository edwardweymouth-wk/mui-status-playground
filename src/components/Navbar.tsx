import * as React from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
      </ul>
    </nav>
  )
}
