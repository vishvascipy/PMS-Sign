import React from 'react'
import "./Webhome.css"
import Best from "../assests/BEST FUEL.png"
import Xbig from "../assests/Xbigone.png"
import Xsmall from "../assests/Xsmallone.png"
import Logo from "../assests/Indhan X text 2.png"


function Webhome() {
  return (
    <>
      <div className='main'>
        <h1 className='best'>BEST FUEL</h1>
        <h1 className='erp'>ERP SOLUTION</h1>
        <div className='xbig'><img src={Xbig} /></div>
        <div className='xsmall'><img src={Xsmall} /></div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <div className='para'>
          <button>Read More</button>
        </div>
        <div className='indhan'>
          <img src={Logo} />
        </div>
      </div>
    </>
  )
}

export default Webhome