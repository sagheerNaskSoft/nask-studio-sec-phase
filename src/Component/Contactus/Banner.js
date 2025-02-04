import React from 'react'
import NavBar from '../NavFooter/NavBar'
import { IoIosArrowRoundDown } from 'react-icons/io'

export default function Banner() {
  return (
    <div className='props-banner new_props_banner'>
            <div className='overlay'>
            <NavBar/>
             <div className='text-banner mt-5'>
                        <h1>Contact US</h1>
                        <p>"Celebrate your love story with beautifully curated wedding and pre-wedding sets, designed to capture timeless memories."</p>
                        {/* <h4>Explor More</h4> */}
                        {/* <div>
                        <IoIosArrowRoundDown className='arrow-down-icon' style={{fontSize:"100px"}} />
                        </div> */}
            </div>

            </div>
    </div>
  )
}
