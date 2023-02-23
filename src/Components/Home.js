import React from 'react'
import "./Home.css";
import Lottie from "lottie-react";
import homeanimation from ".././homeanimation.json";
import Hackerearth from '../SiteComponents/Hackerearth';
import LeetCode from '../SiteComponents/LeetCode';
import CodeChef from '../SiteComponents/CodeChef';

const Home = () => {
  return (
    <div className="Home_Body">
    <div className='Home_Courses'>
      <div className='Home_Courses_Card'>
      <Lottie className='lottieAnimation' animationData={homeanimation} loop={true} />
      <p>UpComing Contests <span>2023</span></p>
      </div>
    </div>
 
    <h3 className="Home_Courses_Title"><span>HackerEarth Contests</span></h3>
      <Hackerearth/>
      <h3 className="Home_Courses_Title"><span>LeetCode Contests</span></h3>
      <LeetCode/>
      <h3 className="Home_Courses_Title"><span>CodeChef Contests</span></h3>
      <CodeChef/>
         
        </div>
  )
}

export default Home