import React from 'react'
import Privacepolicy from '../Component/Privacypolicy/Privacepolicy'
import NavBar from '../Component/NavFooter/NavBar'
import Footer from '../Component/NavFooter/Footer'

function Privacy() {
  return (
   <>
   <div style={{background:'black'}} className='p-1'>
   <NavBar/>
   </div>
   <Privacepolicy/>
   <div className='propfooter'>
   <Footer/>
   </div>
   </>
  )
}

export default Privacy
