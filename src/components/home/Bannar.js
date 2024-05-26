import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './banner.css'

const data = [
  "https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/region/in/news/pc/news-detail/Amazon%20News-Baneer.png?t=1642504220300",
  "https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/region/in/news/pc/news-detail/Amzontvdays.jpg?t=1629723642123",
  "https://images-na.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/MayART/Eventpage/AFpage/Header/V1/pc-headers-may-art._CB620973202_.gif",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img2021/Sportswear_21/SW_22/July/Primeday/Launches/Adidas/3000x600_D_1.jpg",
  "https://www.chrislovesjulia.com/wp-content/uploads/2018/07/Screen-Shot-2018-07-15-at-11.13.14-PM.png",
  "https://m.media-amazon.com/images/S/sonata-images-prod/ACQ_HO_T1/89aa0cfb-43bf-4651-afd5-9ce43a831060._UR3000,600_.jpeg",
  "https://feeds.abplive.com/onecms/images/uploaded-images/2021/10/14/b2a453cc344775710a945464084bd17a_original.gif"
]

const Bannar = () => {
  return (

    <Carousel
      className='carasouel'
      autoPlay={true}
      animation='slide'
      indicators={false}
      navButtonsAlwaysInvisible={false}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "#fff",
          opacity:0.75,
          color: "#494949",
          borderRadius: 0,
          marginTop: -22,
          height: "104px",

        }
      }}>
      {
        data.map((imag, i) => {
          return (
            <>
              <img src={imag} alt='' className='banner_img' />
            </>
          )
        })
      }

    </Carousel>

  )
}

export default Bannar