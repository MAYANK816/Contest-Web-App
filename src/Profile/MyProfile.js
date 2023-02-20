import Lottie from "lottie-react";
import devanimation from ".././devanimation.json";
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import swal from 'sweetalert';
import * as constants from '../Constants/Constants';
import './Profile.css';
const MyProfile = () => {
  const[userOgData,setuserOgData]=useState([]);
  const [userDetails, setuserDetails] = useState({ useremail:'',username:'', password: '', cpassword: '', newpassword: '' })
  let loginData=JSON.parse(localStorage.getItem('loginData'));
  
  const fetchData = () => {
    fetch(`${constants.API_URL}getUser/${loginData}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
          setuserOgData(data.user);
          userDetails.useremail=data.user.useremail;
          userDetails.username=data.user.username;
      })
  }
  useEffect(() => {
    fetchData()
  }, [])



  const updateUser = () => {
    console.log(userDetails);
    if (userDetails.newpassword === userDetails.cpassword && userDetails.password === userOgData.password && userDetails.cpassword) {
      axios.put(`${constants.API_URL}updateUser`, {
        useremail: userDetails.useremail,
        password: userDetails.newpassword,
        username:userDetails.username
      })
        .then((res) => {
         
          if (res.data.status === 200) {
            swal("Good Job!", "Profile Updated", "success");
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
    else {
      swal("Oops!", "Please Check details", "error");
    }
  }
  const changeHandler = (e) => {
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='Login_form'>
        <div className='profile_formData'>
          <Lottie className='lottieAnimation' animationData={devanimation} loop={true} />
          <h1>My Profile</h1>
          <label>Email</label>
          <input type='text' name="useremail" value={`${userOgData.useremail}`} onChange={changeHandler} required disabled />
          <label>UserName</label>
          <input type='text' name="username" value={`${userOgData.username}`} onChange={changeHandler} required disabled/>
          <label>Current Password</label>
          <input type='password' name="password" placeholder='Enter your password' onChange={changeHandler} required />
          <label>New Password</label>
          <input type='password' name="newpassword" placeholder='Enter your password' onChange={changeHandler} required />
          <label>Confirm Password</label>
          <input type='password' name="cpassword" placeholder='Enter your password' onChange={changeHandler} required />
          <button onClick={updateUser} >
            Update Profile
          </button>
        </div>
      </div>
    </>
  )
}

export default MyProfile