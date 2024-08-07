import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Initia-General_Logo-Full_2023-09-04_22.38.18.png';
import './Navbar.css';

const DesktopNavbar = () => {
    return (
        <nav className="desktop-navbar">
            <Link to="./">
                <img src={Logo} alt="Initia Logo" className="desktop-navbar__logo" />
            </Link>
            <ul className="desktop-navbar__list">
                <li className="desktop-navbar__item"><Link to='/' className="desktop-navbar__link">Home</Link></li>
                <li className="desktop-navbar__item"><Link to='/join' className="desktop-navbar__link">Join</Link></li>
                <li className="desktop-navbar__item"><Link to='/compete' className="desktop-navbar__link">Compete</Link></li>
                <li className="desktop-navbar__item"><Link to='/solutions' className="desktop-navbar__link">Solutions</Link></li>
                <li className="desktop-navbar__item"><Link to='/team' className="desktop-navbar__link">Team</Link></li>
            </ul>
        </nav>
    );
}

export default DesktopNavbar;
