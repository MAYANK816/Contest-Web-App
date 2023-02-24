import React from 'react'
import "./Navbar.css"
import { useNavigate, Link } from 'react-router-dom'
import Lottie from "lottie-react";
import devanimation from ".././devanimation.json";
const Navbar_loggedIn = (props) => {
  const navigate = useNavigate();
  const _LogoutUser = () => {
    localStorage.removeItem('loginData');
    props.loginCheck(false);
    navigate("/");
  }
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <Lottie style={{ width: "75px" }} animationData={devanimation} loop={true} />
            <p>Drunken Geeks</p>
          </a>
          <button
            class="navbar-toggler text-light"
            type="button"
            data-toggle="collapse"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>


          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 " >
              <li class="nav-item">
                <Link class="nav-link text-light" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/myprofile">My Profile</Link>
              </li>
           
              <li class="nav-item">
                <Link class="nav-link text-light" to="/about">About Us</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link text-light" to="/contactus">Contact Us</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/favourite">Favourites</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sites
                </Link>
                <div class="dropdown-menu  text-light" aria-labelledby="navbarDropdownMenuLink">
                  <Link class="dropdown-item  text-dark" to="/leetcode">LeetCode</Link>
                  <Link class="dropdown-item  text-dark" to="/hackerearth">HackerEarth</Link>
                  <Link class="dropdown-item  text-dark" to="/codeforces">CodeForces</Link>
                  <Link class="dropdown-item  text-dark" to="/csacademy">Cs Academy</Link>
                  <Link class="dropdown-item  text-dark" to="/kickstart">Kick Start</Link>
                  <Link class="dropdown-item  text-dark" to="/codechef">CodeChef</Link>
                </div>
              </li>
              <li class="nav-item">
                <button class="nav-link text-light logout_btn" onClick={_LogoutUser}>LogOut</button>
              </li>

            </ul>

          </div>

        </div>

      </nav>
    </>
  )
}

export default Navbar_loggedIn