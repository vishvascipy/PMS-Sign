import React from 'react'
import "./AboutUs.css"
import About from "../assests/AboutUs.png"
import Bottom from "../assests/Indhan.png"
import Image from "../assests/AboutBack.png"
import Logo from "../assests/IndhanLogocopy1.png"
import { useState } from 'react'

function AboutUs() {
    const [fulltext, setFulltext] = useState(false)

    const toggletext = () => {
        setFulltext(!fulltext)
    }
    return (
        <div className='featuremain'>
            <div className='background'>
                <div className='img'><img src={About} /></div>
                <div className='imgfeature'>
                    <img src={Image} />
                    <div className='text'>
                        <h2>BEST FUEL</h2>
                        <h2>ERP SOLUTION</h2>
                        <p>
                            {fulltext ? (
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            ) : (
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            )}
                        </p>
                        <div className='button' onClick={toggletext}>
                            <button>{fulltext ? 'Read Less' : 'Read More'}</button>
                        </div>
                    </div>
                </div>
                <div className='logo'>
                    <img src={Logo} />
                </div>
                
                <div className='bottomimg'>
                    <img src={Bottom} />
                </div>
            </div>
        </div>
    )
}

export default AboutUs