import React, { useState } from 'react'
import Banner from '../Component/HomePage/Banner'
import ShootSection from '../Component/HomePage/ShootSection';
import SerivceSetion from '../Component/HomePage/SerivceSetion';
import Footer from '../Component/NavFooter/Footer';

function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
  return (
    <>
    <div   className="animation-container" onMouseMove={handleMouseMove}>
        <Banner mousePosition={mousePosition}/>
        <ShootSection mousePosition={mousePosition}/>
        <SerivceSetion/>
        <Footer/>
        <div
      className="animated-circle"
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
    ></div>
    </div>
    </>
  )
}

export default Home