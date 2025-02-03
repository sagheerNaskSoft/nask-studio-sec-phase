import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3BottomRight } from 'react-icons/hi';
import { PiFlipVerticalLight } from 'react-icons/pi';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import logo from './path-to-your-logo'; // Update this path with the correct logo path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='home-bar'>
      <img className='logo' src={logo} alt='logo' />
      <HiMiniBars3BottomRight className='icons' onClick={toggleMenu} />

      {/* Mobile Menu */}
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className='menu-list'>
          <li>
            <Link to={'/'}>Home <TfiLayoutLineSolid className='ms-2' /></Link>
          </li>
          <li>
            <Link to={'/wedding-sets'}>Set For Wedding Shoot</Link>
          </li>
          <li>
            <Link to={'/rental-spaces'}>Rental Spaces</Link>
          </li>
          <li>
            <Link to={'/props'}>Props</Link>
          </li>
          <li>
            <Link to={'/production-service'}>Production Services</Link>
          </li>
          <li>
            <Link to={'/'}><button className='banner_btn'>Contact US <PiFlipVerticalLight className="btn_icon" /></button></Link>
          </li>
          <div className='close-menu-button'>
            <button onClick={toggleMenu}>Close Menu</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
