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
        <Slide />
        


    </div>
  )
}

export default Maincomponent