import React from 'react'

const Right = () => {
  return (
    <div className='right_buy'>
        <img  className=" imagex" src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/980_AB_GIF_Wave03_SP_TopBanner_1242x450_1.jpg' alt=''/>
        <div className='cost_right'>
            <p>Your order is eligible for FREE delivery</p><br/>
            <span style={{color:"#565959"}}>Select this option at checkout. Details</span>
            <h3>Subtotal (1 items):<span style={{fontWeight:'700'}}> ₹565</span></h3>
            <button className='rightbuy_btn'>Proceed to Buy</button>
            <div className='emi'>
                Emi available
            </div>
        </div>
    </div>
  )
}

export default Right