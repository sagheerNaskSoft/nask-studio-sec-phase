import React from 'react'
import NavBar from '../Component/NavFooter/NavBar'
import Terms from '../Component/TermsCondition/Terms'
import Footer from '../Component/NavFooter/Footer'

function Termscondition() {
  return (
    <>
    <div style={{background:'black'}}>
   <NavBar/>
   </div>
   <Terms/>
   <div className='propfooter'>
   <Footer/>
   </div>
    </>
  )
}

export default Termscondition
