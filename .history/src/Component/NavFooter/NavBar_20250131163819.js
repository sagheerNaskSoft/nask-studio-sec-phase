import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3BottomRight } from 'react-icons/hi';
import { PiFlipVerticalLight } from 'react-icons/pi';
import logo from './path-to-your-logo'; // Update this path with the correct logo path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-bar container'>
      <img className='logo_bar' src={logo} alt='logo' />

      {/* Toggle button visible on small screens */}
      <HiMiniBars3BottomRight className='toggle-icon' onClick={toggleMenu} />

      {/* Menu list (hidden on small screens by default) */}
      <ul className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/wedding-sets'}>Set For Wedding Shoot</Link></li>
        <li><Link to={'/rental-spaces'}>Rental Spaces</Link></li>
        <li><Link to={'/props'}>Props</Link></li>
        <li><Link to={'/production-service'}>Production Services</Link></li>
        <li><Link to={'/'}><button className='banner_btn'>Contact US <PiFlipVerticalLight className="btn_icon" /></button></Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
