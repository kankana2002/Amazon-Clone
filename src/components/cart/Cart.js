import React from 'react'
import "./cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

import { useState } from 'react';




const Cart = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover]  = useState(0);
  return (
    <div className='cart_section'>
        <div className='cart_container'>
            <div className='.left_cart'>
               <img src='https://m.media-amazon.com/images/I/713Jf1cFWDL._SY450_.jpg' alt=''/> 
               <div className='cart_btn'>
                <button className='cart_btn1'>Add to Cart</button>
                <button className='cart_btn2'>Buy Now</button>

               </div>
               

            </div>
            <div className='right_cart'>
              <h3>Pigeon by Stovekraft 1.5 Litre Stainless Steel Hot Electric Kettle (Silver, 12466)</h3>
              <a  href='#' className='link'>
                <h5>visit the Pigeon Store</h5>
              </a>
              <div>
                {
                  [1, 2, 3, 4, 5].map((num)=>(
                    <button 
                    key={num}
                    onClick={()=> setRating(num)}
                    onMouseOver={()=> setHover(num)}
                    onMouseLeave={()=> setHover(rating)}>
                      <span className={`star ${num <= ((rating && hover) || hover) ? 'on': 'off'}`}>
                      <FontAwesomeIcon icon={faStar} />
                      
                      </span>
                    </button>
                  ))
                }
              </div>
             

            </div>

        </div>
        
    </div>
  )
}

export default Cart