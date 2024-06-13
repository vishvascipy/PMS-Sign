import { React, useState } from 'react'
import "./SupportSystem.css"
import Support from "../assests/Support.png"
import Supportrect from "../assests/cloudrectangle.png"
import SupportX from "../assests/IndhanXLogo.png"
import Supportindhan from "../assests/cloudindhan.png"

function SupportSystem() {
    const [fulltext, setFulltext] = useState(false)
    const toggletext = () => {
        setFulltext(!fulltext)
    }

    return (
        <div className='supportmain'>
            <div className='supportback'>
                <div className='supportimage'>
                    <img src={Support} />
                </div>
                <div className='supportfontimg'>
                    <img src={Supportrect} />
                    <div className='supporttext'>
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
                    <div className='supportX'>
                        <img src={SupportX} />
                    </div>
                </div>
                <div className='supportindhan'>
                    <img src={Supportindhan} />
                </div>
                <div className='supportvertical'>24/7 Support</div>
                <div className='supportborder'></div>
            </div>
        </div>
    )
}

export default SupportSystem