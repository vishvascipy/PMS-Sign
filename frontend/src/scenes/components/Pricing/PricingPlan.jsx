import React from 'react'
import "./PricingPlan.css"
import Indhan from "../assests/IndhanXtext2.png"
import Fontimg from "../assests/pricebackground.png"
import PricePlan from "../assests/PriceandPlans.png"

function PricingPlan() {
  return (
    <div className='pricingmain'>
      <div className='priceback'>
        <div className='priceimage'>
          <img src={Indhan} />
        </div>
        <div className='pricefontimg'>
          <img src={Fontimg} />
        </div>
        <div className='textprice'>
          <p>Pricing</p>
        </div>
        <div className='box'>
          <div className='box1'>
            <h4>PRO</h4>
            <h5>3,999</h5>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
          <div className='box2'>
            <h4>X</h4>
            <h5>5,999</h5>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
          </div>
        </div>
        <div className='fontprice'>
          <img src={PricePlan}/>
        </div>
      </div>
    </div>
  )
}

export default PricingPlan