import { React, useState, useEffect } from 'react'
import "./Navbar.css"
import Indhanlogo from "../assests/IndhanLogoText.png"

function Navbar() {
    const [isResponsive, setIsResponsive] = useState(false);

    const handleToggle = () => {
        setIsResponsive(!isResponsive);
    };


    return (
        <>
            <div className='main'>
                <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
                    <a className="home-link"><img src={Indhanlogo} /></a>
                    <a className='list' href='/Home'>Home</a>
                    <a className='list' href='/Features'>Features</a>
                    <a className='list' href='/Pricing'>Pricing&Plan</a>
                    <a className='list' href='/ContactUs'>Contact Us</a>
                    <a className='list' href='/AboutUs'>About Us</a>
                    <a href="javascript:void(0);" className="icon" onClick={handleToggle}>
                        <i className={`fa ${isResponsive ? 'fa-times' : 'fa-bars'}`} id="menuIcon"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar