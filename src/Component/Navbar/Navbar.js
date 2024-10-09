import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className='navbar'>
                <div className='portfolio-navbar d-flex'>
                    <div className='navbar-brand'>
                        <button className='menu-toggle' onClick={toggleMenu}>
                            ☰ {/* This is a hamburger icon */}
                        </button>
                    </div>
                    <div className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul className="nav-items">
                            <li className='nav-list'>
                                <Link className='a' to='/'>Home</Link>
                            </li>
                            <li className='nav-list'>
                                <Link className='a' to='/service'>Services</Link>
                            </li>
                            <li className='nav-list'>
                                <Link className='a' to='/resume'>Resume</Link>
                            </li>
                            <li className='nav-list'>
                                <Link className='a' to='/project'>Project</Link>
                            </li>
                            <li className='nav-list'>
                                <Link className='a' to='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
