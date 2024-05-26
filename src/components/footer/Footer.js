import React from 'react'





const Footer = () => {
    const year = new Date().getFullYear();
    console.log(year);
  return (
    <footer>
        <div className='footer_container'>
            <div className='footr_details_one'>
                <h3>Get to Know Us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Science</p>

            </div>
            <div className='footr_details_one'>
                <h3>Connect with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                

            </div>
            <div className='footr_details_one forres'>
                <h3>Let Us Help You</h3>
                <p>COVID-19 and Amazon</p>
                <p>Your Account</p>
                <p>Returns Centre</p>
                <p>100% Purchase Protection</p>
                <p>Amazon App Download</p>
                <p>Help</p>

            </div>
            <div className='footr_details_one forres'>
                <h3>Make Money with Us</h3>
                <p>Sell under Amazon Accelerator</p>
                <p>Protect and Build Your Brand</p>
                <p>Amazon Global Selling</p>
                <p>Become an Affiliate</p>
                <p>Fulfilment by Amazon</p>
                <p>Advertise Your Products</p>
                <p>Amazon Pay on Merchants</p>


            </div>

        </div>
        <div className='lastdetails'>
            <img src='https://cdn.iconscout.com/icon/free/png-512/free-amazon-1869030-1583154.png?f=webp&w=256' />

            
            <p>Conditions of Use & Sale
Privacy Notice
Interest-Based Ads</p>
<p>© 1996-{year}, Amazon.com, Inc. or its affiliates</p>

            


        </div>

    </footer>
  )
}

export default Footer