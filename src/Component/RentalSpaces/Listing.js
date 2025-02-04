import React from 'react';
import { rental_space } from '../../Context/dummy';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { PiFlipVerticalLight } from 'react-icons/pi';

function Listing() {
    return (
        <div style={{ background: "black", color: "white" }} className='listing_rental'>
            <div className='container'>
                <div className='row m-0'>
                    {rental_space?.map((item, i) => (
                        <div className='col-12 d-flex flex-column flex-lg-row align-items-center my-5' key={i}>
                            {/* Text Content */}
                            <div className={`col-lg-7 d-flex align-items-center px-3 ${i % 2 === 0 ? "order-lg-2" : "order-lg-1"}`}>
                                <div>
                                    <h6 className='studio_heading'>{item?.title}</h6>
                                    {item?.fixed_price && <p className='sub_title_studio'>Price: {item?.fixed_price}</p>}

                                    {/* Amenities List */}
                                    {item?.aminties && (
                                        <ul className='p-0'>
                                            {item?.aminties.map((list, index) => (
                                                <li className='stu_amin d-flex align-items-center' style={{ listStyle: 'none' }} key={index}>
                                                    <IoMdCheckmarkCircleOutline style={{ color: '#483B8B' }} />
                                                    <span className='mx-1'>{list}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Pricing Table */}
                                    {!item?.fixed_price && (
                                        <div className='d-flex justify-content-between'>
                                            <table className='table table-sm'>
                                                <thead>
                                                    <tr>
                                                        <th style={{ backgroundColor: '#F2F2F2' }}>Price</th>
                                                        <th style={{ backgroundColor: '#F2F2F2' }}>Duration</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ background: "none", color: "white" }}>{item?.tow_hours_price}</td>
                                                        <td style={{ background: "none", color: "white" }}>2 hours</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ background: "none", color: "white" }}>{item?.four_hours_price}</td>
                                                        <td style={{ background: "none", color: "white" }}>4 hours</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ background: "none", color: "white" }}>{item?.eight_hours_price}</td>
                                                        <td style={{ background: "none", color: "white" }}>8 hours</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    <p>{item?.text}</p>

                                    {/* Booking Button */}
                                    <a href={`https://wa.me/+923051115501`} target="_blank" rel="noopener noreferrer">
                                        <button className='banner_btn mb-3'>
                                            Book Now <PiFlipVerticalLight className="btn_icon" />
                                        </button>
                                    </a>
                                </div>
                            </div>

                            {/* Image */}
                            <div className={`col-lg-5 d-flex justify-content-center ${i % 2 === 0 ? "order-lg-1" : "order-lg-2"}`}>
                                <img src={item?.image} alt="..." className='img w-100 rounded' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Listing;
