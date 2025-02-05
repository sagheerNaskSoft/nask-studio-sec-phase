import React from 'react'
import { PiFlipVerticalLight } from 'react-icons/pi'
import arrow from '../../Assete/logo/arrow.png'
import img from '../../Assete/studio/2.jpg'
import img1 from '../../Assete/studio/s1.jpg'
import img2 from '../../Assete/studio/s2.jpg'
import img3 from '../../Assete/studio/20-perfect-aesthetic-photo-ideas-for-202413.jpg'
function ShootSection({ mousePosition }) {
    return (
        <div className='shoot-section p-1'>
            <div className='container px-sm-3 px-4'>
                <h1 className='text-center my-sm-5 mt-5 mb-4'>Best Shoot</h1>
                <div className='row '>
                    <div className='col-lg-6 py-sm-5 py-0'>
                        <div class="col-lg-6">
                            <div class="front-img d-lg-none d-block mb-5">
                                <img className='w-100' src={img} alt='.../' />
                            </div>
                        </div>
                        <div>
                            <h3>Creative Infinty</h3>
                            <p className='mt-3'>we believe in capturing the essence of the moment through our lens, curating a collection of the best shots that tell a compelling story. Trust us to deliver a portfolio of unforgettable moments, where every shot is a masterpiece in its own right.
                                we believe in capturing the essence of the moment through our lens, curating a collection of the best shots that tell a compelling story. Trust us to deliver a portfolio of unforgettable moments, where every shot is a masterpiece in its own right.
                            </p>
                            <button className='banner_btn'>Explor More  <PiFlipVerticalLight className="btn_icon" /></button>
                            <img src={arrow} className='arrow-home'  style={{ transform: "rotate(180deg)" }} alt='arrow' />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='img-back'></div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='img-back'></div>
                    </div>
                    <div className='col-lg-6 py-5'>
                        <div class="col-lg-6">
                            <div class="front-img d-lg-none d-block mb-5">
                                <img className='w-100' src={img1} alt='.../' />
                            </div>
                        </div>
                        <div>
                            <h3>Fashion Shoot – Elevate</h3>
                            <p className='mt-3'>Step into the spotlight and let our expert photographers capture your most stunning looks. Whether you're a fashion brand, influencer, or individual looking for a professional portfolio, we create breathtaking visuals tailored to your style.High-end, magazine-worthy images that tell a story.Showcase your designs with professional product photography.Build or update your portfolio with stunning portraits.Capture fashion in its natural element.Create impactful visuals for your brand’s identity.
                            </p>
                            <button className='banner_btn'>Explor More  <PiFlipVerticalLight className="btn_icon" /></button>
                            <img src={arrow} className='arrow-home'  style={{ transform: "rotate(180deg)" }}  alt='arrow' />
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-lg-6 py-sm-5 py-0'>
                        <div class="front-img d-lg-none d-flex justify-content-between mb-5">
                            <img className='w-100' src={img2} alt='.../' />
                        </div>
                        <div className='mt-sm-0 mt-5'>
                            <h3>E-Commerce Product Photography</h3>
                            <p className='mt-3'>In the digital shopping world, first impressions matter. Our professional e-commerce photography ensures your products look stunning, detailed, and appealing—boosting customer confidence and increasing conversions.Clean, crisp images perfect for online stores.Show your products in real-life settings.Interactive views for a complete shopping experience.Visually engaging layouts to showcase your products.High-quality images that highlight fabric and fit.Precision-focused shots that capture every detail.
                            </p>
                            <button className='banner_btn'>Explor More  <PiFlipVerticalLight className="btn_icon" /></button>
                            <img src={arrow} className='arrow-home'  style={{ transform: "rotate(180deg)" }} alt='arrow' />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='img-back2'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='img-back2'></div>
                    </div>
                    <div className='col-lg-6 py-5'>
                        <div class="col-lg-6">
                            <div class="front-img w-100 h-100 d-lg-none d-block mb-5">
                                <img className='w-100 h-75' src={img3} alt='.../' />
                            </div>
                        </div>
                        <div>
                            <h3>Bridal Shoot – Capturing</h3>
                            <p className='mt-3'>Your wedding look is a once-in-a-lifetime masterpiece, and our bridal shoots ensure every detail is captured with elegance and grace. From the sparkle in your eyes to the intricate details of your dress, we create stunning visuals that tell your love story.Timeless and elegant studio or outdoor shots.Breathtaking natural backdrops for dreamy photos.Soft, romantic, and magazine-worthy shots.Fashion-forward imagery with creative styling. Capturing the emotions, excitement, and preparations.
                            </p>
                            <button className='banner_btn'>Explor More  <PiFlipVerticalLight className="btn_icon" /></button>
                            <img src={arrow} className='arrow-home'  style={{ transform: "rotate(180deg)" }} alt='arrow' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShootSection