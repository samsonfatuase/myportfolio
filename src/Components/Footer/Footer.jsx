import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
           <div className="footer-top-left">
            <h3>SAMSONFAT ONLINE GRAPHICS</h3>
            <p>Try working with us today to enjoy the best of our work.</p>
            
           </div>
           <div className="footer-top-right">
            <div className="footer-email-input">
                <input type="email" placeholder='Enter Your Email' />

            </div>
            <div className="footer-subscribe">subscribe</div>
           </div>

        </div>
        <hr />
        <div className="footer-bottom">
           
            <div className="footer-bottom-right">
                <p className="footer-bottom-left"></p>
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer