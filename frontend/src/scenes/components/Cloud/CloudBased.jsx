import { React, useState } from 'react'
import "./CloudBased.css"
import Cloud from "../assests/CloudBased.png"
import Cloudrect from "../assests/cloudrectangle.png"
import CloudX from "../assests/IndhanXLogo.png"
import Cloudindhan from "../assests/cloudindhan.png"

function CloudBased() {
    const [fulltext, setFulltext] = useState(false)
    const toggletext = () => {
        setFulltext(!fulltext)
    }
    return (
        <div className='cloudmain'>
            <div className='cloudback'>
                <div className='cloudimage'>
                    <img src={Cloud} />
                </div>
                <div className='cloudfontimg'>
                    <img src={Cloudrect} />
                    <div className='cloudtext'>
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
                    <div className='cloudX'>
                        <img src={CloudX} />
                    </div>
                </div>
                <div className='cloudindhan'>
                    <img src={Cloudindhan} />
                </div>
                <div className='cloudvertical'>Cloud Based</div>
                <div className='cloudborder'></div>
            </div>
        </div>
    )
}

export default CloudBased