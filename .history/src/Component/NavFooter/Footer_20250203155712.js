import React from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { AiFillTikTok } from 'react-icons/ai'
import { FaSquareInstagram } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer py-5'>
        <div style={{position:"relative"}} className='container'>
        <svg id="svg" className='footer_arrow1'  width="187" height="200" viewBox="0 0 87 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M85.884 93.3192C81.694 90.7992 77.374 88.6392 72.864 86.7492L72.854 86.7392C72.784 86.7092 72.714 86.6792 72.644 86.6492C71.644 86.2392 71.184 87.7492 71.954 88.2892C74.744 90.2392 77.524 92.1892 80.314 94.1392C65.444 93.1592 49.724 91.6492 37.274 82.7992C24.724 73.8792 19.1441 59.5792 24.2141 45.5392C36.834 46.3792 50.104 40.6792 58.544 31.6192C61.974 27.9292 67.064 19.7692 59.724 17.0292C52.804 14.4392 42.874 21.0692 37.764 24.9692C31.404 29.8192 26.114 36.4092 23.094 43.6992C22.144 43.6192 21.214 43.4992 20.304 43.3392C12.194 41.9092 3.83405 37.1492 1.80405 28.6092C-0.775954 17.7592 7.44404 8.13917 14.144 0.719173C14.504 0.319173 13.924 -0.260824 13.554 0.129176C7.05405 6.92918 0.214027 14.6392 0.00402741 24.6092C-0.165973 32.8092 5.06403 39.1892 12.254 42.5492C15.494 44.0592 18.9341 44.9792 22.4341 45.3892C19.4641 53.6392 19.4641 62.6792 24.1241 71.0792C35.0841 90.8092 58.634 94.3592 79.264 95.8592L74.304 98.0692C73.254 98.5392 74.164 100.079 75.204 99.6192C77.824 98.4592 80.444 97.2892 83.054 96.1292C83.174 96.1392 83.294 96.1492 83.414 96.1492C83.854 96.1792 84.1141 95.9292 84.2141 95.6092C84.7641 95.3692 85.314 95.1192 85.864 94.8792C86.524 94.5792 86.404 93.6292 85.884 93.3192ZM26.334 40.7792C29.974 34.0692 35.5141 28.3592 41.9041 24.2392C45.1441 22.1492 48.7141 20.3192 52.4041 19.1592C53.8641 18.6992 55.504 18.2592 57.044 18.3592C61.704 18.6592 62.304 22.9792 60.344 26.4792C53.924 37.9692 38.034 44.3192 24.864 43.8092C25.304 42.7992 25.794 41.7892 26.334 40.7792Z" fill="white"></path></svg>
            {/* <img className='footer_arrow1' src={arrow} alt='...'/> */}
        <h1>Get In Touch !</h1>

        <p className='email_pera'>We provide Creative photography for editorial, PR, celebrity and lifestyle assignments Pakistan Wide. We provide Creative <br/>photography for editorial, PR, celebrity and lifestyle assignments Pakistan Wide. We provide Creative photography for editorial, PR, <br/>celebrity and lifestyle assignments Pakistan Wide.</p>
        <div className='inp_box'>
            <input type='email' placeholder='Enter E-mail'/>
            <button>Subscribe</button>
        </div>
        {/* <img className='footer_arrow2' src={arrow} alt='...'/> */}
        <hr style={{borderColor:"white"}} className='my-5'/>
        </div>
        <div className='container'>
                <div className='d-flex justify-content-center'><FaFacebook className="footer_icons" />
                <FaSquareInstagram className="footer_icons" />
                <AiFillTikTok className="footer_icons" />
                <FaYoutube className="footer_icons" />
                </div>
                <p className='text-center ' style={{color:"white"}}>+92 305 1115 501<span className='mx-sm-2 mx-0'>|</span>sale@naskstudio.com
                </p>
                <p className='text-center' style={{color:"white"}}>Mon-Sat 9:00 am to 10:00pm
                </p>
                <p className='text-center' style={{color:"white"}}>Building No. 21, 3rd Floor, Block-CCA, DHA Phase 8 - Ex Park View Phase-8 Lahore, 54000
                </p>
                <div className='d-flex justify-content-center'><Link className="link_footer">FAQs</Link><span className='mx-2'>|</span><Link className="link_footer">Terms & Condtions</Link><span className='mx-2'>|</span><Link className="link_footer">Privacy Policy</Link></div>
                <hr style={{borderColor:"white"}} className='my-5'/>
                <p className='text-center' style={{color:"white"}}>© Copyright 2024 naskstudio.com. All Rights Reserved
                </p>
        </div>
    </div>
  )
}

export default Footer