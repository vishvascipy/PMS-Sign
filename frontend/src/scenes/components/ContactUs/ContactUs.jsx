import React from 'react'
import "./ContactUs.css"
import BackCenter from "../assests/contactback.png"

function ContactUs() {
  return (
    <div className='contactmain'>
      <div className='contactback'>
        <div className='contactimg'>
          <img src={BackCenter} />
        </div>

      </div>
    </div>
  )
}

export default ContactUs