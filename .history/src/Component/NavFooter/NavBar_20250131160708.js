import React, { useState } from 'react';
import logo from '../../Assete/logo/Naskstudio (R).svg';
import { Link } from 'react-router-dom';
import { PiFlipVerticalLight } from 'react-icons/pi';
import { HiMiniBars3BottomRight } from 'react-icons/hi';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='nav-bar container'>
            <img className='logo_bar' src={logo} alt='logo' />
            
            {/* Hamburger Icon (Mobile Menu Toggle) */}
            <HiMiniBars3BottomRight className='menu-toggle' onClick={toggleMenu} />

            {/* Menu - Hidden when isMenuOpen is false */}
            <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/wedding-sets'}>Set For Wedding Shoot</Link></li>
                    <li><Link to={'/rental-spaces'}>Rental Spaces</Link></li>
                    <li><Link to={'/props'}>Props</Link></li>
                    <li><Link to={'/production-service'}>Producation Services</Link></li>
                    <li><Link to={'/'}><button className='banner_btn'>Contact US <PiFlipVerticalLight className="btn_icon" /></button></Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
