import React from 'react'
import Banner from '../Component/Props/Banner'
import Listing from '../Component/Props/Listing'
import Footer from '../Component/NavFooter/Footer'

function PropsPage() {
  return (
    <div >
        <Banner/>
        <Listing/>
        <div className='propfooter'>
        <Footer/>
        </div>
    </div>
  )
}

export default PropsPage