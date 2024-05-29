import React from 'react'
import "./cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import { useState } from 'react';
import { Divider } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';





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
          <div className='div'>
            <img src='https://www.zonbase.com/blog/wp-content/uploads/2021/08/5ff74433cedc318c055af9e7_1-1536x798-1.png' className='image' />

          </div>
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
          <p className='mrp' >M.R.P.: ₹1,195</p>
          <p className='mrp'>Inclusive of all taxes</p>
          <p>EMI starts at ₹213 per month</p>
          



        </div>
        <div className='Last_section'>

        </div>
        
        



      </div>

      
      
      

    </div>
    
  )
}

export default Cart