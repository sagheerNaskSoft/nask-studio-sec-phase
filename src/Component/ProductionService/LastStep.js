import React from 'react'
import gif from '../../Assete/logo/sent.gif'
function LastStep({prevStep}) {
  return (
    <div className='last_form d-flex flex-column justify-content-center align-items-center'>
        <h5>Thanks for Inquiry</h5>
        <img src={gif} alt='sent' style={{width:"40%"}} />
        <p>Inquiry Sent Successfully !</p>
        <div className='col-12 d-flex justify-content-center my-2'>
            <button onClick={prevStep} type='button' className='banner_btn me-2 w-100'>Back</button>
        {/* <button type='submit' className='booking_btn'>Submit</button> */}
        </div>
    </div>
  )
}

export default LastStep