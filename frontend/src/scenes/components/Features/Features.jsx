import React from 'react'
import "./Features.css"
import Feature from "../assests/Features 1.png"
import Back from "../assests/Rectangle 4.png"
import Image from "../assests/Rectangle 3.png"

function Features() {
    return (
        <div className='featuremain'>
            <div className='background'>
                <div className='img'><img src={Feature} /></div>
                <div className='imgfeature'>
                    <img src={Image} />
                    <div className='text'>
                        <h2>BEST FUEL</h2>
                        <h2>ERP SOLUTION</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Features