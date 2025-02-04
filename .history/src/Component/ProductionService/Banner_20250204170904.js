import React from 'react'
import NavBar from '../NavFooter/NavBar'
import WizerdForm from './WizerdForm'
import SnakBar from '../NavFooter/SnakBar'
function Banner() {
    const [show, setShow] = React.useState(false)
    const [message, setMessage] = React.useState({ succes: false, message: "" })
    const snakbar = (show, message) => {
        setShow(show)
        setMessage(message)
    }
  return (
    <div className='production-service p-1'>
        <div className='container'> 
                <NavBar/>
            <h5 className='m-md-0 my-2 text-start'>Producation Services</h5>
            <h2 className='mt-5'><em>You Every Vision is Brought to Life with Creativity, Precision, and Excellence</em></h2>
            {/* <div className='my-3'>
                <span data-preserver-spaces="true" style={{ backgroundColor: "#ffff00" }}><strong><em>Under the supervision of creative geniuses Guddu &amp; Shani, our specialty is to provide a one-stop, hassle-free solution by taking care of your challenging and innovative boards</em></strong>.&nbsp;</span>
            </div> */}
            <p>At Nask Studio, we specialize in providing a hassle-free solution for your most challenging and imaginative projects. Under the guidance of our creative experts, we deliver unparalleled production services that bring your vision to life seamlessly.
            </p>
            <p>
            With a fully equipped facility and operations, we ensure exceptional production value for every project. Our Studio in Lahore, Pakistan, serves as the hub for managing diverse productions with precision and excellence.
            </p>
            <WizerdForm snakbar={snakbar} />
            <h6><em>What Are We Specialized To Do:</em></h6>
            <p>Our team handles every detail, from initial concept to final delivery, ensuring an excellent and professional outcome every time.</p>
            <ul>
                <li>TVC/DVC Production</li>
                <li>Set Design & Directions</li>
                <li>Props & Equipment Arrangements</li>
                <li>Talent Coordination (top photographers, videographers, and stylists)</li>
                <li>Support Staff Coordination</li>
                {/* <li>Talent Coordination (Photographers, Videographers, Models, Makeup Artist, Stylist)</li>
                <li>Equipment Coordination</li>
                <li>Food & Catering Coordination</li>
                <li>Support Staff Coordination</li> */}
            </ul>
            <p>Share your project brief with us, and our representative will get in touch to discuss how we can turn your vision into a captivating reality.</p>
            <SnakBar show={show} message={message} setShow={setShow} />
        </div>
    </div>
  )
}

export default Banner