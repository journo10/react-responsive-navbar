import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  const [icon, setIcon] = useState(false)

  const handleIcon = () => {
    setIcon(!icon)
  }

  const handleCloseMenu = () => {
    setIcon(false);
  }

  return (
    <nav className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={handleCloseMenu}>
            <h1>React-LOGO</h1>
          </Link>
        </div>

        <ul className={icon ? 'nav-item active' : 'nav-item'} >
          <li className='nav-list'>
            <Link to="/" onClick={handleCloseMenu}>
              Home
            </Link>
          </li>
          <li className='nav-list'>
            <Link to="/about" onClick={handleCloseMenu}>
              About
            </Link>
          </li>
          <li className='nav-list'>
            <Link to="/contact" onClick={handleCloseMenu}>
              Contact
            </Link>
          </li>
          <li className='nav-list'>
            <Link to="/projects" onClick={handleCloseMenu}>
              Projects
            </Link>
          </li>
        </ul>

        <div className="auth">
          <ul className='auth-item'>
            <li className='auth-list'>
              <Link to="/login" onClick={handleCloseMenu}>
                <span>Login</span><i className="fas fa-sign-in-alt"></i>
              </Link>
            </li>
            <li className='auth-list'>
              <Link to="/register" onClick={handleCloseMenu}>
                <span>Register</span><i className="fas fa-user-plus"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="toggler" onClick={handleIcon}>
          <i className={icon ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar