import React, { useState } from 'react'
import "./Webhome.css"
import Xbig from "../assests/IndhanLogoScribble.png"
import Logo from "../assests/IndhanXtext2.png"


function Webhome() {
  const [text, setText] = useState(false)

  const toggletext = () => {
    setText(!text)
  }
  return (
    <>
      <div className='main'>
        <h1 className='best'>BEST FUEL</h1>
        <div className='restxt'>
          <div className='readmore'>
            <p>
              {text ? (
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              ) : (
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              )}
            </p>
            <div className='button' onClick={toggletext}>
              <button>{text ? 'Read Less' : 'Read More'}</button>
            </div>
          </div>
        </div>
        <h1 className='erp'>ERP SOLUTION</h1>

        <div className='xbig'><img src={Xbig} /></div>

        <div className='indhan'>
          <img src={Logo} />
        </div>
      </div>
    </>
  )
}

export default Webhome