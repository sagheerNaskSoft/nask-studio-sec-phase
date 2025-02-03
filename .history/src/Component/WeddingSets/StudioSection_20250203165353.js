import React from 'react'
import { PiArrowBendDownRightLight, PiFlipVerticalLight } from 'react-icons/pi'
import img1 from '../../Assete/studio/1.webp'
import img3 from '../../Assete/studio/2.webp'
import img4 from '../../Assete/studio/3.webp'
import img6 from '../../Assete/studio/4.webp'
import img2 from '../../Assete/studio/5.webp'
import img5 from '../../Assete/studio/6.webp'
import img7 from '../../Assete/studio/7.webp'
import img8 from '../../Assete/studio/8.webp'

function StudioSection() {
  return (
    <>
      <div className='service-section p-sm-1 p-0 py-5'>
        <div className='container'>
          <h1 className='text-center my-sm-5 my-3'>Our Pre-Made Sets</h1>

          <div className="row">

            <div className='col-lg-7 col-md-12 col-12'>
              <div className='row m-0'>
                <div className='col-md-6 p-0'>
                  <div className='img1'>
                    <img src={img1} alt='img-1' />
                  </div>
                  <div className='img2'>
                    <img src={img4} alt='img-1' />
                  </div>
                </div>
                <div className='col-md-6 p-0 my-sm-5 my-0'>
                  <div className='img2'>
                    <img src={img3} alt='img-1' />
                  </div>
                  <div className='img1'>
                    <img src={img6} alt='img-1' />
                  </div>
                </div>

              </div>
            </div>
            <div className='col-lg-5 col-md-12 col-12 d-flex'>
              <div>
                <h3>CAPTURE YOUR VISION ANYWHERE!</h3>
                <p>Stunning Locations for Bridal Photography
                </p>
                <ul className='d-flex flex-wrap p-0'>
                  <li className='my-1 w-100'><PiArrowBendDownRightLight className='ul_icons me-2' />Unique sets ranging from floral designs to rustic doors and exotic arches.</li>
                  <li className='my-1 w-100'><PiArrowBendDownRightLight className='ul_icons me-2' />Meticulously crafted backdrops for stunning visuals.</li>
                  <li className='my-1 w-100'><PiArrowBendDownRightLight className='ul_icons me-2' />Optimized for natural and artificial light.</li>
                  <li className='my-1 w-100'><PiArrowBendDownRightLight className='ul_icons me-2' />Centrally located for easy access.</li>
                  {/* <li className='my-1 w-100'><PiArrowBendDownRightLight className='ul_icons me-2' />STUDIO SPACE</li> */}
                </ul>
                <div className='d-flex justify-content-between'>
                  <table className='table table-sm' style={{ background: "none" }}>
                    <thead>
                      <tr>
                        <th style={{ backgroundColor: '#F2F2F2' }}>Price</th>
                        <th style={{ backgroundColor: '#F2F2F2' }}>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ background: "none", color: "white" }}>Rs: 12,000</td>
                        <td style={{ background: "none", color: "white" }}>2 hours</td>
                      </tr>
                      <tr>
                        <td style={{ background: "none", color: "white" }}>Rs: 18,000</td>
                        <td style={{ background: "none", color: "white" }}>4 hours</td>
                      </tr>
                      {/* <tr>
                      <td>{item?.eight_hours_price}</td>
                      <td>8 hours</td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
                <button className='banner_btn mb-5'>Book now<PiFlipVerticalLight className="btn_icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="row respocive">
            <div className='col-lg-5 col-md-12 col-12 d-flex'>
              <div>
                <h3>CAPTURE YOUR VISION ANYWHERE!</h3>
                <p>Stunning Locations for Bridal Photography
                </p>
                <ul className='d-flex flex-wrap p-0'>
                  <li className='my-1 w-100'><PiArrowBendDownRightLight className='ul_icons me-2' />Unique sets ranging from floral designs to rustic doors and exotic arches.</li>
                  <li className='my-1 w-100'><PiArrowBendDownRightLight className='ul_icons me-2' />Meticulously crafted backdrops for stunning visuals.</li>
                  <li className='my-1 w-100'><PiArrowBendDownRightLight className='ul_icons me-2' />Optimized for natural and artificial light.</li>
                  <li className='my-1 w-100'><PiArrowBendDownRightLight className='ul_icons me-2' />Centrally located for easy access.</li>
                  {/* <li className='my-1 w-100'><PiArrowBendDownRightLight className='ul_icons me-2' />STUDIO SPACE</li> */}
                </ul>
                <div className='d-flex justify-content-between'>
                  <table className='table table-sm' style={{ background: "none" }}>
                    <thead>
                      <tr>
                        <th style={{ backgroundColor: '#F2F2F2' }}>Price</th>
                        <th style={{ backgroundColor: '#F2F2F2' }}>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ background: "none", color: "white" }}>Rs: 12,000</td>
                        <td style={{ background: "none", color: "white" }}>2 hours</td>
                      </tr>
                      <tr>
                        <td style={{ background: "none", color: "white" }}>Rs: 18,000</td>
                        <td style={{ background: "none", color: "white" }}>4 hours</td>
                      </tr>
                      {/* <tr>
                      <td>{item?.eight_hours_price}</td>
                      <td>8 hours</td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
                <button className='banner_btn mb-5'>Book now<PiFlipVerticalLight className="btn_icon" />
                </button>
              </div>
            </div>
            <div className='col-lg-7 col-md-12 col-12'>
              <div className='row m-0'>
                <div className='col-md-6 p-0'>
                  <div className='img1'>
                    <img src={img2} alt='img-1' />
                  </div>
                  <div className='img2'>
                    <img src={img5} alt='img-1' />
                  </div>
                </div>
                <div className='col-md-6 p-0 my-sm-5 my-0'>
                  <div className='img2'>
                    <img src={img7} alt='img-1' />
                  </div>
                  <div className='img1'>
                    <img src={img8} alt='img-1' />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudioSection