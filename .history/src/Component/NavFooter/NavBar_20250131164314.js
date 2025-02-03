import React, { useState } from 'react'
import logo from '../../Assete/logo/Naskstudio (R).svg'
import { Link } from 'react-router-dom'
import { PiFlipVerticalLight } from 'react-icons/pi'
function NavBar() {
        const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
    
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };
    return (
        
        <div className='nav-bar container'>
            <img className='logo_bar' src={logo} alt='logo' />
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/wedding-sets'}>Set For Wedding Shoot</Link></li>
                <li><Link to={'/rental-spaces'}>Rental Spaces</Link></li>
                <li><Link to={'/props'}>Props</Link></li>
                <li><Link to={'/production-service'}>Producation Services</Link></li>
                <li><Link to={'/'}><button className='banner_btn'>Contact US <PiFlipVerticalLight className="btn_icon"/></button></Link></li>
            </ul>
        </div>

        
    )
}

export default NavBar