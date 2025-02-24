import React from 'react'
import Banner from '../Component/Contactus/Banner'
import FormMap from '../Component/Contactus/FormMap'
import Footer from '../Component/NavFooter/Footer'
import SnakBar from '../Component/NavFooter/SnakBar'


function Contactus() {
  const [show,setShow]=React.useState(false)
  const [message,setMessage]=React.useState({succes:false,message:""})
  const snakbar=(show,message)=>{
      setShow(show)
      setMessage(message)
  }
  return (
  <>
  <Banner/>
  <FormMap snakbar={snakbar}/>
  <SnakBar show={show} message={message}  setShow={setShow}/>
  <div className='propfooter'>
        <Footer/>
        </div>
  </>
  )
}

export default Contactus
