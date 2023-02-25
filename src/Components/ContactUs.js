import React from 'react'
import Lottie from "lottie-react";
import aboutusanimation from ".././aboutusanimation.json";
const ContactUs = () => {
  return (
    <div>
      <div className="about-us-content">
    <Lottie className='lottieAnimationabout' animationData={aboutusanimation} loop={true} />
        <div className='about-us-children'>
        <h1>Contact Us</h1>
        <p>Thank you for visiting our website! We appreciate your interest in our products/services and welcome any questions or comments you may have. There are several ways you can get in touch with us:</p>
        <p>Email us directly, please send your message to "hellodrunkengeeks@gmail.com". We typically respond within 24-48 hours.</p>
      </div>
    </div>
    </div>
  )
}

export default ContactUs