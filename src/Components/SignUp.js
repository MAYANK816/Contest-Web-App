import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from 'axios';
import swal from 'sweetalert';
import devanimation from ".././devanimation.json";
import Lottie from "lottie-react";
const SignUp = (props) => {
  const [data, setdata] = useState({ useremail: '', password: '', username: '' })
  const navigate = useNavigate();
  const setLoginData = () => {
    console.log(data)
    if (data.useremail && data.password && data.username) {
      axios.post('https://contest-web-app-backend.vercel.app/register', data)
        .then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem('loginData', JSON.stringify(res.data.alreadyExists))
            props.loginCheck(true);
            navigate("/");
            swal("Yeah!!", "Register Successfully", "success");
          }
          else if (res.data.status === 500) {
            swal("Oops!!", "User Already Exists", "error");
          }
          else {
            swal("Oops!!", "Site Error", "error");
          }
        })
        .catch((err) => {
          swal("Oops!", "Please Check details", "error");
        })
    }
  }
  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className='Login_form'>
      <div className='Login_formData'>
        <Lottie className='lottieAnimation' animationData={devanimation} loop={true} />

        <h1>SignUp</h1>
        <label>Email</label>
        <input type='text' name="useremail" placeholder='Enter your email' onChange={changeHandler} required />
        <label>UserName</label>
        <input type='text' name="username" placeholder='Choose Your Username' onChange={changeHandler} required />
        <label>Password</label>
        <input type='password' name="password" placeholder='Enter your password' onChange={changeHandler} required />
        <button onClick={setLoginData} >
          SignUp
        </button>
      </div>
    </div>
  )
}

export default SignUp