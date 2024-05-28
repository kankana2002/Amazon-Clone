import React from 'react'
import "./cart.css";

const Cart = () => {
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

            </div>

        </div>
        
    </div>
  )
}

export default Cart