import { React, useState } from 'react'
import "./CustomizeOwn.css"
import Customrect from "../assests/customrect.png"
import CustomX from "../assests/IndhanXLogo.png"
import Customindhan from "../assests/cloudindhan.png"

function CustomizeOwn() {
    const [fulltext, setFulltext] = useState(false)
    const toggletext = () => {
        setFulltext(!fulltext)
    }

    return (
        <div className='custommain'>
            <div className='customback'>
                <div className='customfontimg'>
                    <img src={Customrect} />
                    <div className='customtext'>
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
                    <div className='customX'>
                        <img src={CustomX} />
                    </div>
                </div>
                <div className='customindhan'>
                    <img src={Customindhan} />
                </div>
                <div className='customvertical'>Customize Your Own</div>
                <div className='customborder'></div>
            </div>
        </div>
    )
}

export default CustomizeOwn