import React from 'react'
import { PiFlipVerticalLight } from 'react-icons/pi'
import arrow from '../../Assete/logo/arrow.png'
import img from '../../Assete/studio/download.jpg'
import img1 from '../../Assete/studio/images.jpg'
import img2 from '../../Assete/studio/images (1).jpg'
import img3 from '../../Assete/studio/20-perfect-aesthetic-photo-ideas-for-202413.jpg'
function ShootSection({mousePosition}) {
  return (
    <div className='shoot-section p-1'>
        <div className='container'>
        <h1 className='text-center my-sm-5 my-0'>Best Shoot</h1>
            <div className='row '>
                <div className='col-lg-6 py-5'>
                <div class="col-lg-6">
                <div class="front-img d-sm-none d-block mb-5">
                    <img className='w-100' src={img}alt='.../'/>
                </div>
                </div>
                    <div>
                        <h3>Creative Infinty</h3>
                        <p className='mt-3'>we believe in capturing the essence of the moment through our lens, curating a collection of the best shots that tell a compelling story. Trust us to deliver a portfolio of unforgettable moments, where every shot is a masterpiece in its own right.
                        we believe in capturing the essence of the moment through our lens, curating a collection of the best shots that tell a compelling story. Trust us to deliver a portfolio of unforgettable moments, where every shot is a masterpiece in its own right.
                        </p>
                        <button className='banner_btn'>Explor More  <PiFlipVerticalLight className="btn_icon"/></button>
                        <img src={arrow} style={{transform:"rotate(180deg)"}} alt='arrow'/>
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
                <div class="front-img d-sm-none d-block mb-5">
                    <img className='w-100' src={img1}alt='.../'/>
                </div>
                </div>
                    <div>
                        <h3>Best Shoot</h3>
                        <p className='mt-3'>we believe in capturing the essence of the moment through our lens, curating a collection of the best shots that tell a compelling story. Trust us to deliver a portfolio of unforgettable moments, where every shot is a masterpiece in its own right.
                        we believe in capturing the essence of the moment through our lens, curating a collection of the best shots that tell a compelling story. Trust us to deliver a portfolio of unforgettable moments, where every shot is a masterpiece in its own right.
                        </p>
                        <button className='banner_btn'>Explor More  <PiFlipVerticalLight className="btn_icon"/></button>
                        <img src={arrow} style={{transform:"rotate(180deg)"}} alt='arrow'/>
                    </div>
                </div>
                
            </div>
            <div className='row'>
                <div className='col-lg-6 py-5'>
                <div class="front-img d-sm-none d-flex justify-content-between">
                    <img className='w-100' src={img2}alt='.../'/>
                </div>
                    <div className='mt-sm-0 mt-5'>
                        <h3>Best Shoot</h3>
                        <p className='mt-3'>we believe in capturing the essence of the moment through our lens, curating a collection of the best shots that tell a compelling story. Trust us to deliver a portfolio of unforgettable moments, where every shot is a masterpiece in its own right.
                        we believe in capturing the essence of the moment through our lens, curating a collection of the best shots that tell a compelling story. Trust us to deliver a portfolio of unforgettable moments, where every shot is a masterpiece in its own right.
                        </p>
                        <button className='banner_btn'>Explor More  <PiFlipVerticalLight className="btn_icon"/></button>
                        <img src={arrow} style={{transform:"rotate(180deg)"}} alt='arrow'/>
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
                <div class="front-img w-100 h-100 d-sm-none d-block mb-5">
                    <img className='w-100 h-75' src={img3}alt='.../'/>
                </div>
                </div>
                    <div>
                        <h3>Best Shoot</h3>
                        <p className='mt-3'>we believe in capturing the essence of the moment through our lens, curating a collection of the best shots that tell a compelling story. Trust us to deliver a portfolio of unforgettable moments, where every shot is a masterpiece in its own right.
                        we believe in capturing the essence of the moment through our lens, curating a collection of the best shots that tell a compelling story. Trust us to deliver a portfolio of unforgettable moments, where every shot is a masterpiece in its own right.
                        </p>
                        <button className='banner_btn'>Explor More  <PiFlipVerticalLight className="btn_icon"/></button>
                        <img src={arrow} style={{transform:"rotate(180deg)"}} alt='arrow'/>
                    </div>
                </div>                
            </div>

        </div>
  </div>
  )
}

export default ShootSection