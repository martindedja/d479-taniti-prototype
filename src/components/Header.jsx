import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/things-to-do', label: 'Things to Do' },
  { to: '/lodging', label: 'Lodging' },
  { to: '/dining', label: 'Dining' },
  { to: '/transportation', label: 'Transportation' },
  { to: '/visitor-information', label: 'Visitor Information' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header-bar">
        <NavLink to="/" className="site-logo" onClick={() => setMenuOpen(false)}>
          Taniti Tourism
        </NavLink>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <nav id="main-nav" className={`site-nav ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
