import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

import Lottie from "lottie-react";
import devanimation from ".././devanimation.json";

const Navbar = () => {
  return (
   <>
   <nav class="navbar navbar-expand-sm navbar-light ">
  <div class="container-fluid">
    <div class="navbar-brand ">
    <Lottie style={{width:"65px"}}animationData={devanimation} loop={true} />;
      </div>
    <button
      class="navbar-toggler text-light"
      type="button"
      data-toggle="collapse"
      data-mdb-toggle="collapse"
      data-target="#navbarSupportedContent"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
  

    <div class="collapse navbar-collapse " id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
        <li class="nav-item">
        <Link class="nav-link text-light" to="/home">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link text-light" to="/about">About Us</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link text-light" to="/contactus">Contact Us</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link text-light" to="/signUp" >SignUp</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" to="/login" >SignIn</Link>
        </li>
  
      </ul>

    </div>
  </div>

</nav>
</>
  )
}

export default Navbar;