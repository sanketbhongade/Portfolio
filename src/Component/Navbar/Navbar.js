import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='navbar'>
            <div className='portfolio-navbar d-flex'>
                <div className='navbar-brand'>
                    <button
                        className='menu-toggle'
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        ☰   {/* Hamburger Icon */}
                    </button>
                </div>
                <div className={`navbar-nav ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
                    <ul className="nav-items">
                        <li className='nav-list'>
                            <Link className='a' to='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        <li className='nav-list'>
                            <Link className='a' to='/service' onClick={() => setIsMenuOpen(false)}>Services</Link>
                        </li>
                        <li className='nav-list'>
                            <Link className='a' to='/resume' onClick={() => setIsMenuOpen(false)}>Resume</Link>
                        </li>
                        <li className='nav-list'>
                            <Link className='a' to='/project' onClick={() => setIsMenuOpen(false)}>Project</Link>
                        </li>
                        <li className='nav-list'>
                            <Link className='a' to='/contact' onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
