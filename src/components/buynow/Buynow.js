import React from 'react'
import "./buynow.css";
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';


const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className='buynow_container'>
        <div className='left_buy'>
          <h1>Shopping Cart</h1>
          <p>Select All Item</p>
          <span className='leftbuyprice'>Price</span>
          <Divider />
          <div className='item_containert'>
            <img src='https://m.media-amazon.com/images/I/811AxL+qTpL._SY741_.jpg' alt='' />
            <div className='item_details'>
              <h3>Kent 16105 Crisp Pop Up Toaster 750 Watts | 2 Slice Automatic Pop Up Electric Toaster | 6 Heating Modes | Auto Shut Off | Removable Bread Crumbs Tray | White</h3>
              <h3>Home & Kitchen</h3>
              <h3 className='diffrentprice'> ₹1,098</h3>
              <p className='unusuall'>fastest delivery Tomorrow 6 AM - 10 AM.</p>
              <p>Free Delivery</p>
              <img src='https://medic52.com/wp-content/uploads/2016/01/badge-amazon-app-store.png' className='image' />
              <Option/>

            </div>
            <h3 className='item_price'>₹565</h3>
          </div>
          <Divider/>
          <Subtotal/>
        </div>
        <Right/>
      </div>



    </div>
  )
}

export default Buynow