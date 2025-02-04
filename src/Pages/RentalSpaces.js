import React from 'react'
import Banner from '../Component/Props/Banner'
import Listing from '../Component/RentalSpaces/Listing'
import Footer from '../Component/NavFooter/Footer'

function RentalSpaces() {
  return (
    <div>
        <Banner/>
        <Listing/>
      <div className="rental-footer">
      <Footer/>
      </div>
    </div>
  )
}

export default RentalSpaces