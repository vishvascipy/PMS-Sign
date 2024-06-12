import React from 'react'
import "./AboutUs.css"
import About from "../assests/AboutUs.png"
import Bottom from "../assests/Indhan.png"
import Image from "../assests/AboutBack.png"
import Logo from "../assests/IndhanXLogo.png"
import { useState, useEffect } from 'react'

function AboutUs() {
    const [fulltext, setFulltext] = useState(false)
    const [windowWidth, setWindowWidth] = useState()

    // to read current width
    const updateWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateWidth)

        //clean up
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    useEffect(() => {
        if (windowWidth < 800) {
            setFulltext(true)
        }
        else {
            setFulltext(false)
        }
    }, [windowWidth])

    const toggletext = () => {
        setFulltext(!fulltext)
    }
    return (
        <div className='aboutmain'>
            <div className='backgroundabout'>
                <div className='backabout'>
                    <div className='img'><img src={About} /></div>
                    <div className='imgabout'>
                        <img src={Image} />
                        <div className='textabout'>
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

                    <div className='bottompic'>
                        <img src={Bottom} />
                    </div>

                    <div className='logoabout'>
                        <img src={Logo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs