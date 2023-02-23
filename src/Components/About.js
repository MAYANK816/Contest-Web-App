import React from 'react'
import './About.css'
import Lottie from "lottie-react";
import aboutusanimation from ".././aboutusanimation.json";
const About = () => {
  return (
    <div>
      <div className="about-us-content">
        <Lottie className='lottieAnimationabout' animationData={aboutusanimation} loop={true} />
        <div className='about-us-children'>
        <h1>About Us</h1>
        <p>Welcome to Drunkengeeks, your go-to destination for making job hunting easier and more enjoyable. We are a team of passionate individuals who believe that finding the right job should be a fun and rewarding experience, rather than a daunting and stressful one.</p>
        <p>At Drunkengeeks, we understand the challenges that students and professionals face in the job market. That's why we have created a platform that not only helps you discover the latest job opportunities but also allows you to participate in exciting contests that can help you showcase your skills and stand out from the crowd.</p>
        <p>Our team is made up of experienced professionals who are dedicated to helping job seekers succeed in their career goals. We are committed to providing you with the tools and resources you need to succeed, including resume-building tips, interview advice, and career guidance.</p>
        <p>Our job search platform is user-friendly and intuitive, making it easy for you to search for jobs by location, industry, and job title. You can also create a personal profile that showcases your skills and experience, making it easier for recruiters to find you and connect with you.</p>
        <p>In addition to job search features, we also offer a range of exciting contests that allow you to compete with other job seekers and show off your skills. Our contests cover a range of industries and skillsets, from coding challenges to graphic design competitions. Winning a contest can help you build your portfolio, gain exposure, and even land your dream job.</p>
        <p>We are constantly updating our platform with new features and tools to make job hunting easier and more enjoyable. We welcome your feedback and suggestions, so please feel free to reach out to us with any ideas or concerns.</p>
        <p>Thank you for choosing Drunkengeeks as your partner in job hunting. We look forward to helping you achieve your career goals!</p>
      </div>
      </div>
    </div>
  )
}

export default About