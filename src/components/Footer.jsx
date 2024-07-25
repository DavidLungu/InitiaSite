import React from 'react';
import Logo from '../assets/Initia-General_Logo-Full_2023-09-04_22.38.18.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__row">
                <div className="footer__left">
                    <img src={Logo} alt="Initia Logo" className="footer__logo" />
                </div>
                <div className="footer__right">
                    <a href='https://schools.friscoisd.org/campus/high-school/lone-star/home'>Lone Star High School</a>
                    <p>Socials</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
