import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/Initia-General_Logo-Full_2023-09-04_22.38.18.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="./">
                <img src={Logo} alt="Initia Logo" className="navbar__logo" />
            </Link>
            <ul className="navbar__list">
                <li className="navbar__item"><Link to='/' className="navbar__link">Home</Link></li>
                <li className="navbar__item"><Link to='/join' className="navbar__link">Join</Link></li>
                <li className="navbar__item"><Link to='/compete' className="navbar__link">Compete</Link></li>
                <li className="navbar__item"><Link to='/solutions' className="navbar__link">Solutions</Link></li>
                <li className="navbar__item"><Link to='/team' className="navbar__link">Team</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
