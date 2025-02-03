import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { PiFlipVerticalLight } from 'react-icons/pi';
import img1 from '../../Assete/HomaBanner/1.jpg';
import img2 from '../../Assete/HomaBanner/2.jpg';
import img3 from '../../Assete/HomaBanner/3.jpg';
import img4 from '../../Assete/HomaBanner/4.jpg';
import img5 from '../../Assete/HomaBanner/5.jpg';
import img6 from '../../Assete/HomaBanner/6.jpg';
import img7 from '../../Assete/HomaBanner/7.jpg';
import img8 from '../../Assete/HomaBanner/8.jpg';
import logo from '../../Assete/logo/Naskstudio (R).svg';

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Images */}
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
            ))}
            
            {/* Header Bar */}
            <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 lg:p-8 z-10">
                <img className="h-10 md:h-12 lg:h-16" src={logo} alt="logo" />
                <HiMiniBars3BottomRight className="text-white text-3xl md:text-4xl cursor-pointer" />
            </div>
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12 lg:px-24">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight" dangerouslySetInnerHTML={{
                    __html: `Your Perfect Studio <br/> Space for Every Occasion!`
                }}></h1>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl">Props for Every Shoot | E-commerce Photography | Wedding Memories</p>
                <button className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg flex items-center space-x-2 hover:bg-gray-300">
                    Contact Us <PiFlipVerticalLight className="ml-2" />
                </button>
            </div>
            
            {/* Navigation Links */}
            <div className="absolute bottom-4 left-0 w-full flex justify-center md:justify-start px-4 md:px-12 lg:px-24 z-10">
                <ul className="flex flex-wrap gap-4 text-sm md:text-lg text-white">
                    <li><Link to={'/'} className="hover:underline">Home<TfiLayoutLineSolid className='ml-2' /></Link></li>
                    <li><Link to={'/wedding-sets'} className="hover:underline">Set For Wedding Shoot</Link></li>
                    <li><Link to={'/rental-spaces'} className="hover:underline">Rental Spaces</Link></li>
                    <li><Link to={'/props'} className="hover:underline">Props</Link></li>
                    <li><Link to={'/production-service'} className="hover:underline">Production Services</Link></li>
                    <li><Link to={'/contact'} className="hover:underline">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;
