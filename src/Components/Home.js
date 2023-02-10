import React from 'react'
import "./Home.css";
// import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import Lottie from "lottie-react";
import homeanimation from ".././homeanimation.json";
import Hackerearth from '../SiteComponents/Hackerearth';
import LeetCode from '../SiteComponents/LeetCode';
import CodeChef from '../SiteComponents/CodeChef';

const Home = () => {
// const navigate = useNavigate();
 
  return (
    <div className="Home_Body">
    <div className='Home_Courses'>
      <div className='Home_Courses_Card'>
      <Lottie className='lottieAnimation' animationData={homeanimation} loop={true} />
      <p>UpComing Contests <span>2023</span></p>
      </div>
    </div>
 
    <h3 className="Home_Courses_Title"><span>HackerEarth Contests</span></h3>
   
    {/* <div className='Home_Products'>    
      {
        _ApiData.map((item,index) => {
          if(index<9)
        return <CardComponent key={index} item={item} />
        })
      } */}
      
      {/* </div> */}
      <Hackerearth/>
      <h3 className="Home_Courses_Title"><span>LeetCode Contests</span></h3>
      <LeetCode/>
      <h3 className="Home_Courses_Title"><span>CodeChef Contests</span></h3>
      <CodeChef/>
          <Footer/>
          <div className='Home_Footer_Container_5'>
            <p>© 2023 All Rights Reserved</p>
        </div>
        </div>
  )
}

export default Home