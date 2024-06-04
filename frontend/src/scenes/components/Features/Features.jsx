import React from 'react'
import "./Features.css"
import Feature from "../assests/Features 1.png"
import Bottom from "../assests/Indhan.png"
import Image from "../assests/Rectangle 3.png"
import Indhanlogo from "../assests/IndhanXLogo.png"
import { useState } from 'react'
function Features() {
    const [fulltext, setFulltext] = useState(false)

    const toggletext = () => {
        setFulltext(!fulltext)
    }
    return (
        <div className='featuremain'>
            <div className='background'>
                <div className='img'><img src={Feature} /></div>
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
                <div className='side'>
                    <p><a href='/Support'>24/7 Support</a></p>
                    <p><a href='/CustomizeYourOwn'>Customize Your Own</a></p>
                    <p><a href='/CloudBased'>Cloud Based</a></p>
                </div>

                <div className='bottomimg'>
                    <img src={Bottom} />
                </div>
                <div className='logo'>
                    <img src={Indhanlogo}/>
                </div>

            </div>
        </div>
    )
}

export default Features