import React from 'react'
import "./cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import { useState } from 'react';
import { Divider } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { products } from './cartdata';







const Cart = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className='cart_section'>
      <div className='cart_container'>
        <div className='.left_cart'>
          <img src='https://m.media-amazon.com/images/I/713Jf1cFWDL._SY450_.jpg' alt='' />
          <div className='cart_btn'>
            <button className='cart_btn1'>Add to Cart</button>
            <button className='cart_btn2'>Buy Now</button>

          </div>


        </div>
        <div className='right_cart'>
          <h3>Pigeon by Stovekraft 1.5 Litre Stainless Steel Hot Electric Kettle (Silver, 12466)</h3>
          <a href='#' className='link'>
            <h5>visit the Pigeon Store</h5>
          </a>
          <div>
            {
              [1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setRating(num)}
                  onMouseOver={() => setHover(num)}
                  onMouseLeave={() => setHover(rating)}>
                  <span className={`star ${num <= ((rating && hover) || hover) ? 'on' : 'off'}`}>
                    <FontAwesomeIcon icon={faStar} />

                  </span>
                </button>
              ))
            }
          </div>
          <img className='kankana' src='https://www.zonbase.com/blog/wp-content/uploads/2021/08/5ff74433cedc318c055af9e7_1-1536x798-1.png'/>
         
          <h6 className='h6'>5K+ bought in past month</h6>
          <Divider />
          <div className='pricetag'>
            <span aria-hidden="true" className='discount'>-49%</span>
            <span className='price' data-a-size="xl" data-a-color="base"></span>
            <span aria-hidden="true">
              <span className='a-price'>&#8377;</span>
              <span className='a-price-whole'>615</span>
            </span>
          </div>
          <p className='mrp' >M.R.P:<span style={{ color: "red" }}> ₹1,195</span></p>
          <p className='mrp'>Inclusive of all taxes</p>
          <p>EMI starts at <span style={{ color: "red" }}>₹213</span> per month</p>



          <Divider />
          <p className='description'>
            <h5>About this item</h5>
            <ul style={{ listStyleType: 'disc', color: "#565959", fontSize: 14, fontWeight: 500 }}>
              <li>Max 3 differentiators Great Features - i.Automatic Cutoff ii. 360 Degree Swivel Base iii.Single Touch lid locking</li>
              <li>Voltage: 230V; Wattage: 1500W. Heating Element:Yes</li>
              <li>Warranty: 1 Year, BSNL/MTNL</li>
              <li>i.Power - 1500 watts ii. Capacity - 1.5L iii.Material- Stainless Steel iv. Concealed Element</li>
              <li>Troubleshooting guidelines: i.Never operate the appliance empty ii. Never lift the kettle from the base when the unit is in operation.</li>
              <li>The large opening in the top allows easy access to the smooth, seamless Stainless Steel interior for easy cleaning of mineral deposits</li>

            </ul>
          </p>




        </div>
      </div>
    </div>

  )
}

export default Cart