import Lottie from "lottie-react";
import devanimation from ".././devanimation.json";
import axios from 'axios';
import React,{useState} from 'react'
import swal from 'sweetalert';
import './Profile.css';
const MyProfile = () => {
  const data=JSON.parse(localStorage.getItem('loginData'));
  const [userDetails, setuserDetails] = useState({useremail:data[0].useremail,password:'',cpassword:'',newpassword:''})

  const updateUser = () => {
    if (userDetails.newpassword === userDetails.cpassword && userDetails.password===data[0].password && userDetails.cpassword) {
      axios.put('https://contest-web-app-backend.vercel.app /updateUser',{
        useremail:userDetails.useremail,
        password:userDetails.newpassword
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
            swal("Good Job!", "Profile Updated", "success");
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
    else{
        swal("Oops!", "Please Check details", "error");
    }
  }
  const changeHandler = (e) => {
    setuserDetails({...userDetails,[e.target.name]:e.target.value})
  }

  return (
    <>
     <div className='Login_form'>
      <div className='profile_formData'>
      <Lottie className='lottieAnimation' animationData={devanimation} loop={true} />
      <h1>My Profile</h1>
        <label>Email</label>
        <input type='text' name="useremail" placeholder={`${userDetails.useremail}`} onChange={changeHandler} required disabled/>
        <label>Current Password</label>
        <input type='password' name="password"  placeholder='Enter your password'onChange={changeHandler} required/>
        <label>New Password</label>
        <input type='password' name="newpassword"  placeholder='Enter your password'onChange={changeHandler} required/>
        <label>Confirm Password</label>
        <input type='password' name="cpassword"  placeholder='Enter your password'onChange={changeHandler} required/>       
        <button onClick={updateUser} >
        Update Profile
        </button>
    </div>
    </div>
    </>
  )
}

export default MyProfile