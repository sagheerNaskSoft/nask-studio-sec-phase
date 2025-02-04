import React from 'react'
import Banner from '../Component/WeddingSets/Banner'
import Footer from '../Component/NavFooter/Footer'
import StudioSection from '../Component/WeddingSets/StudioSection'

function WeddingSets() {
  return (
    <div>
        <Banner/>
        <StudioSection/>
       <div className="wedding-footer">
       <Footer/>
       </div>
    </div>
  )
}

export default WeddingSets