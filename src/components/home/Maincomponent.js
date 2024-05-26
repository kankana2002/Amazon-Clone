import React from 'react'
import Bannar from './Bannar'
import "./home.css"
import Slide from './Slide';

const Maincomponent = () => {
  return (
    <div className='home_section'>
        <div className='banner_part'>
            <Bannar/>

        </div>
        <div className="slide_part">
          <div className='left_slide'>
            <Slide title="Today’s Deals"/>

          </div>
          <div className='right_slide'>
            <h4>Amazon New launch</h4>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/katariy/BAU_Fader/Nord_2/7th_Sept/DENNIZ_LP_BAU_MOBILE.jpg" alt=''/>
            <a href='#'>See More</a>

          </div>

        </div>
        <Slide title="Starting ₹99 | Home improvement essentials"/>
        <Slide title="Appliances for your home | Up to 55% off"/>
        <Slide title="Up to 60% off | Styles for women"/>
           <div className='center_img'>
            <img src='https://m.media-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Mar_23/EMI_marketing/EMI_STORE/EMI_Store_header_pc_1242x300_3_._CB591758102_.jpg' alt=''/>

           </div>

        <Slide title="Up to 50% off | Men's shoes for every occasion"/>
        <Slide title="Up to 50% off | Curated kitchen essentials"/>
        <Slide title="Up to 45% off | Transform your space with furniture from stores nearby"/>
        
        
        


    </div>
  )
}

export default Maincomponent