import { React, useEffect, useState } from 'react'
import "./ContactUs.css"
import BackCenter from "../assests/contactback.png"
import Contactlogo from "../assests/IndhanXLogo.png"
import Contact from "../assests/ContactUs.png"

function ContactUs() {
  const [windowWidth, setWindowWidth] = useState()
  const [contacttext, setContacttext] = useState(false)

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
      setContacttext(true)
    }
    else {
      setContacttext(false)
    }
  }, [windowWidth])


  const toggletext = () => {
    setContacttext(!contacttext)
  }
  return (
    <div className='contactmain'>
      <div className='contactbackgorund'>
        <div className='contactback'>
          <div className='contactimg'>
            <img src={BackCenter} />
            <div className='contacttext'>
              <h2>BEST FUEL</h2>
              <h2>ERP SOLUTION</h2>
              <p>
                {contacttext ? (
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                ) : (
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                )}
              </p>
              <div className='button' onClick={toggletext}>
                <button>{contacttext ? 'Read Less' : 'Read More'}</button>
              </div>
            </div>
          </div>
          <div className='contactlogo'>
            <img src={Contactlogo} />
          </div>
          <div className='contact'>
            <img src={Contact} />
          </div>
          <div className='contactcolor'></div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs