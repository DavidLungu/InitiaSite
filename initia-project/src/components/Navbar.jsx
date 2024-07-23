import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/Initia-General_Logo-Full_2023-09-04_22.38.18.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Initia Logo" className="logo"/>
      <ul className="nav-list">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/join'>Join</Link></li>
        <li><Link to='/compete'>Compete</Link></li>
        <li><Link to='/solutions'>Solutions</Link></li>
        <li><Link to='/team'>Team</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar