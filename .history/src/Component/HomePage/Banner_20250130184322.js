import React, { useEffect, useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { PiFlipVerticalLight } from "react-icons/pi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Link } from "react-router-dom";
import img1 from "../../Assete/HomaBanner/1.jpg";
import img2 from "../../Assete/HomaBanner/2.jpg";
import img3 from "../../Assete/HomaBanner/3.jpg";
import img4 from "../../Assete/HomaBanner/4.jpg";
import img5 from "../../Assete/HomaBanner/5.jpg";
import img6 from "../../Assete/HomaBanner/6.jpg";
import img7 from "../../Assete/HomaBanner/7.jpg";
import img8 from "../../Assete/HomaBanner/8.jpg";
import logo from "../../Assete/logo/Naskstudio (R).svg";

const Banner = ({ mousePosition }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const images = [
        { src: img1, text: "Your Perfect Studio <br/> Space for Every<br/> Occasion!", pera: "Props for Every Shoot | E-commerce Photography | Wedding Memories" },
        { src: img2, text: "Studio Space for Rent:<br/> Create, Capture, <br/>Celebrate!", pera: "E-commerce, Weddings, & More - Fully Equipped for Your Vision" },
        { src: img3, text: "Bring Your Creative<br/> Vision to Life at<br/> Our Studio!", pera: "From Props to Perfect Lighting - E-commerce to Wedding Shoots" },
        { src: img4, text: "Shoot Like a <br/> Pro in Our Studio<br/> Space!", pera: "Ideal for E-commerce, Weddings, and Every Special Moment" },
        { src: img5, text: "Rent the Best<br/> Studio for  Your <br/>Creative Projects!", pera: "Props, Perfect Lighting, and Space for All Your Shoots" },
        { src: img6, text: "Where Creativity<br/> Meets Comfort: Rent <br/> Our Studio!", pera: "Where Creativity Meets Comfort: Rent Our Studio!" },
        { src: img7, text: "Where Creativity<br/> Meets Comfort: Rent <br/> Our Studio!", pera: "Where Creativity Meets Comfort: Rent Our Studio!" },
        { src: img8, text: "Where Creativity<br/> Meets Comfort: Rent <br/> Our Studio!", pera: "Where Creativity Meets Comfort: Rent Our Studio!" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="background-container">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`background ${index === currentIndex ? "active" : ""}`}
                    style={{
                        background: `linear-gradient(to right, rgba(0, 0, 0, 0.338), rgba(0, 0, 0, 0.464)), url(${image.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                    }}
                ></div>
            ))}
            
            <div className="home-bar">
                <img className="logo" src={logo} alt="logo" />
                <HiMiniBars3BottomRight className="icons" onClick={toggleCollapse} />
            </div>

            <div className={`text-overlay ${isCollapsed ? "expanded" : "collapsed"}`}>
                <div>
                    <h1 dangerouslySetInnerHTML={{ __html: images[currentIndex].text }}></h1>
                    <p>{images[currentIndex].pera}</p>
                    <button className="banner_btn">Contact US <PiFlipVerticalLight className="btn_icon" /></button>
                </div>
                <div>
                    <ul>
                        <li><Link to={'/'}>Home<TfiLayoutLineSolid className='ms-2'/></Link></li>
                        <li><Link to={'/wedding-sets'}>Set For Wedding Shoot</Link></li>
                        <li><Link to={'/rental-spaces'}>Rental Spaces</Link></li>
                        <li><Link to={'/props'}>Props</Link></li>
                        <li><Link to={'/production-service'}>Production Services</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;
