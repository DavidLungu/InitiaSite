import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Initia-General_Logo-Full_2023-09-04_22.38.18.png';
import './MobileNavbar.css';

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
      setMenuOpen(false);
  };

  return (
      <nav className="mobile-navbar">
          <Link to="./">
              <img src={Logo} alt="Initia Logo" className="navbar__logo" />
          </Link>
          <div className="mobile-menu">
              <button className="menu-icon" onClick={toggleMenu}>
                  <span className={`navicon ${menuOpen ? 'open' : ''}`}></span>
              </button>
              <ul className={`navbar__list ${menuOpen ? 'open' : ''}`}>
                  <li className="navbar__item"><Link to='/' className="navbar__link" onClick={closeMenu}>Home</Link></li>
                  <li className="navbar__item"><Link to='/join' className="navbar__link" onClick={closeMenu}>Join</Link></li>
                  <li className="navbar__item"><Link to='/compete' className="navbar__link" onClick={closeMenu}>Compete</Link></li>
                  <li className="navbar__item"><Link to='/solutions' className="navbar__link" onClick={closeMenu}>Solutions</Link></li>
                  <li className="navbar__item"><Link to='/team' className="navbar__link" onClick={closeMenu}>Team</Link></li>
              </ul>
          </div>
      </nav>
  );
}

export default MobileNavbar;
