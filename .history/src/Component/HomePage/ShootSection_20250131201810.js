import React from 'react'
import { PiFlipVerticalLight } from 'react-icons/pi'
import arrow from '../../Assete/logo/arrow.png'
import img from '../../Assete/studio/download.jpg'
function ShootSection({mousePosition}) {
  return (
    <div className='shoot-section p-1'>
        <div className='container'>
        <h1 className='text-center my-5'>Best Shoot</h1>
            <div className='row '>
                <div className='col-lg-6 py-5'>
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
                <div class="col-lg-6">
                <div class="front-img">
                    <img src={img}alt='.../'/>
                </div>
                </div>
            </div>
            <div className='row'>
            <div className='col-lg-6'>
                   <div className='img-back'></div>
                </div>
                <div className='col-lg-6 py-5'>
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
                    <div>
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