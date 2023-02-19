import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import devanimation from ".././devanimation.json";
import "./Login.css"
import axios from 'axios';
import loader from '.././loader.gif'
import swal from 'sweetalert';
import Lottie from "lottie-react";
import TextField from '@mui/material/TextField';
const Login = (props) => {
  const [data, setdata] = useState({ useremail: '', password: '' })
  const navigate = useNavigate();
  const setLoginData = () => {
    if (data.useremail && data.password) {
      swal({
        title: "",
        text: "Loading...",
        icon: loader,
        buttons: false,
        closeOnClickOutside: false
      });
      axios.post('https://violet-panther-robe.cyclic.app/loginUser', data)
        .then((res) => {
          swal.close();
          if (res.data.status === 200) {

            let userData = res.data.user;
            localStorage.setItem('loginData', JSON.stringify(userData))
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
          swal.close();
          swal("Oops!", "Something went wrong", "error");
        })
    }
    else {
      swal("Oops!", "Please fill all the details", "error");
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
        <TextField id="outlined-email" label="Email" type="text" variant="outlined" name="useremail" onChange={changeHandler} sx={{ marginBottom: "10px" }} />
        <TextField id="outlined-password" label="Password" type="password" variant="outlined" name="password" onChange={changeHandler} sx={{ marginBottom: "10px" }} />
        <div className='forgot_password'>
          <div className='remember_me'>
            <input type='checkbox' name="remember" placeholder='Enter your password' onChange={changeHandler} required />
            <label>Remember me</label>
          </div>
          <Link to='/forgot_passcode'>Forgot Password</Link>
        </div>
        <button onClick={setLoginData} >
          LogIn
        </button>
      </div>
    </div>
  )
}

export default Login