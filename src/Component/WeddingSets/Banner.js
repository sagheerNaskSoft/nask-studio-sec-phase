import React from 'react'
import NavBar from '../NavFooter/NavBar'
import { IoIosArrowRoundDown } from 'react-icons/io'

function Banner() {
  return (
    <div className='wedding-banner'>
        <div className='overlay'>
            <NavBar/>
            {/* <div className='container '> */}
                <div className='text-banner mt-5'>
            <h1>Wedding and Pre Wedding Sets</h1>
            <p>"Celebrate your love story with beautifully curated wedding and pre-wedding sets, designed to capture timeless memories."</p>
            <h4>Explore More</h4>
            <div>
            <IoIosArrowRoundDown className='arrow-down-icon' style={{fontSize:"100px"}} />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner