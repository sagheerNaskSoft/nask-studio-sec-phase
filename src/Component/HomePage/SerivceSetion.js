import React from 'react'
import { PiArrowBendDownRightLight } from 'react-icons/pi'
import img1 from '../../Assete/gellery/1.jpg'
import img2 from '../../Assete/gellery/2.jpeg'
import img3 from '../../Assete/gellery/3.gif'
import img4 from '../../Assete/gellery/4.gif'
import img5 from '../../Assete/gellery/5.webp'
import img6 from '../../Assete/gellery/6.webp'
function SerivceSetion() {
    return (
        <div className='service-section p-1 py-5'>
            <div className='container'>
                <h1 className='text-center my-5'>Our Services</h1>

                <div className="row">
                    <div className='col-lg-4 col-md-12 col-12 d-flex align-items-center'>
                        <div>
                            <h3>What We Do</h3>
                            <p>We provide Creative photography for editorial, PR, celebrity and lifestyle assignments Pakistan Wide.
                                We provide Creative photography for editorial, PR, celebrity and lifestyle assignments Pakistan Wide.
                                We provide Creative photography for editorial, PR, celebrity and lifestyle assignments Pakistan Wide.
                            </p>
                            <ul className='d-flex flex-wrap p-0'>
                                <li className='my-1'><PiArrowBendDownRightLight className='ul_icons me-2' />E-COMMERCE</li>
                                <li className='my-1'><PiArrowBendDownRightLight className='ul_icons me-2' />FASHION SHOOT</li>
                                <li className='my-1'><PiArrowBendDownRightLight className='ul_icons me-2' />PROPERTY SHOOT</li>
                                <li className='my-1'><PiArrowBendDownRightLight className='ul_icons me-2' />WEEDING SHOOT</li>
                                <li className='my-1'><PiArrowBendDownRightLight className='ul_icons me-2' />STUDIO SPACE</li>
                            </ul>

                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12 col-12'>
                        <div className='row m-0'>
                            <div className='col-md-4 p-0'>
                                <div className='img1'>
                                    <img src={img1} alt='img-1' />
                                </div>
                                <div className='img2'>
                                    <img src={img4} alt='img-1' />
                                </div>
                            </div>
                            <div className='col-md-4 p-0'>
                                <div className='img2'>
                                    <img src={img3} alt='img-1' />
                                </div>
                                <div className='img1'>
                                    <img src={img6} alt='img-1' />
                                </div>
                            </div>
                            <div className='col-md-4 p-0'>
                                <div className='img1'>
                                    <img src={img5} alt='img-1' />
                                </div>
                                <div className='img2'>
                                    <img src={img2} alt='img-1' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SerivceSetion