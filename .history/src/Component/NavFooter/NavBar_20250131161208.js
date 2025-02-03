import React from 'react'
import logo from '../../Assete/logo/Naskstudio (R).svg'
import { Link } from 'react-router-dom'
import { PiFlipVerticalLight } from 'react-icons/pi'
function NavBar() {
    return (
        <div className='nav-bar container'>
            <img className='logo_bar' src={logo} alt='logo' />
            <div className='home-bar'>
                <img className='logo' src={logo} alt='logo' />
                <HiMiniBars3BottomRight className='icons' onClick={toggleMenu} />

                {/* Your Menu */}
          
                    <div className={`menu ${isMenuOpen?"active":""}`}>
                        {/* Your menu items here */}
                        <div>
                            <ul className='menu-list'>
                                <li>
                                    <Link to={'/'}>Home<TfiLayoutLineSolid className='ms-2' /></Link>
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
                                    <Link to={'/production-service'}>Producation Services</Link>
                                </li>
                                <li>
                                    <Link>Contact Us</Link>
                                </li>
                                <div className='close-minu-button'>
                                    <button onClick={toggleMenu}>close Menu</button>
                                </div>
                            </ul>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default NavBar