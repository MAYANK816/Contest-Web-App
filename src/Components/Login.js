import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import devanimation from ".././devanimation.json";
import "./Login.css"
import axios from 'axios';
import swal from 'sweetalert';
import Lottie from "lottie-react";
const Login = (props) => {
  const [data, setdata] = useState({ useremail: '', password: '' })
  const navigate = useNavigate();
  const setLoginData = () => {
    if (data.useremail && data.password) {
      axios.post('https://contest-web-app-backend.vercel.app/loginUser', data)
        .then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem('loginData', JSON.stringify(res.data.user))
            props.loginCheck(true);
            navigate("/home");
            swal("Yeah!!", "Login Successfully", "success");
          }
          else if (res.data.status === 404) {
            swal("Oops!", "No Uuer found", "error");
          }
          else if (res.data.status === 500) {
            swal("Oops!!", "Please check the credentials", "error");
          }
          else {
            swal("Oops!!", "Site Error", "error");
          }
        })
        .catch((err) => {
          swal("Oops!", "Something went wrong", "error");
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
        <h1>LogIn</h1>
        <label>Email</label>
        <input type='text' name="useremail" placeholder='Enter your email' onChange={changeHandler} required />
        <label>Password</label>
        <input type='password' name="password" placeholder='Enter your password' onChange={changeHandler} required />
        <div className='forgot_password'>
          <div className='remember_me'>
            <input type='checkbox' name="remember" placeholder='Enter your password' onChange={changeHandler} required />
            <label>Remember me</label>
          </div>
          <Link href='/forgot_passcode'>Forgot Password</Link>
        </div>
        <button onClick={setLoginData} >
          LogIn
        </button>
      </div>
    </div>
  )
}

export default Login