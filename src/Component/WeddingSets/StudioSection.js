import React, { useEffect, useState } from 'react'
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


  const images = [img1, img2, img3, img4] 
  const images1 = [img5, img6, img7, img8];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  return (
    <>
      <div className='service-section p-1 py-sm-5 py-3'>
        <div className='container'>
          <h1 className='text-center my-sm-5 my-3'>Our Pre-Made Sets</h1>

          <div className="row mb-5">

            <div className='col-lg-7 col-md-12 col-12 d-md-block d-none'>
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
            <div className='col-lg-7 col-md-12 col-12 d-md-none d-block mb-md-0 mb-5'>
              <div className="slider-container">
                {/* Image Display */}
                <div className="slider">
                  <div className="row justify-content-center p-0">
                    <div className="col-11 p-0" style={{ height: "300px" }}>
                      <img className='w-100 h-100' style={{ objectFit: "cover" }} src={images[currentIndex]} alt={`img-${currentIndex + 1}`} />
                    </div>
                  </div>
                </div>

                {/* Dots Navigation */}
                <div className="dots-container">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === currentIndex ? "active" : ""}`}
                      onClick={() => setCurrentIndex(index)}
                    ></span>
                  ))}
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
                <button className='banner_btn mb-sm-5 mb-0'>Book now<PiFlipVerticalLight className="btn_icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="row pt-lg-5 pt-3">
          <div className='col-lg-7 col-md-12 col-12 d-md-none d-block my-md-0 mb-5 mt-4'>
              <div className="slider-container">
                {/* Image Display */}
                <div className="slider">
                  <div className="row justify-content-center p-0">
                    <div className="col-11 p-0" style={{ height: "300px" }}>
                      <img className='w-100 h-100' style={{ objectFit: "cover" }} src={images1[currentIndex1]} alt={`img-${currentIndex1 + 1}`} />
                    </div>
                  </div>
                </div>

                {/* Dots Navigation */}
                <div className="dots-container">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${index === currentIndex1 ? "active" : ""}`}
                      onClick={() => setCurrentIndex1(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
            <div className='col-lg-5 col-md-12 col-12 d-flex order-lg-first order-last'>
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
            <div className='col-lg-7 col-md-12 col-12 d-md-block d-none order-lg-last order-first'>
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