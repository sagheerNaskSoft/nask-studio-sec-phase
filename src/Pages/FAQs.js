import React from 'react'
import NavBar from '../Component/NavFooter/NavBar'
import Content from '../Component/FAQs/Content'
import Footer from '../Component/NavFooter/Footer'

function FAQs() {
  return (
    <>
      <div className="navv" style={{backgroundColor:"black"}}>
      <NavBar/>
      <Content />
     <div className="propfooter">
     <Footer />
     </div>
      </div>
    </>
  )
}

export default FAQs
