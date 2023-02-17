import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from 'axios';
import swal from 'sweetalert';
import devanimation from ".././devanimation.json";
import Lottie from "lottie-react";
import TextField from '@mui/material/TextField';
const SignUp = (props) => {
  const [data, setdata] = useState({ useremail: '', password: '', username: '',subscribed:false})
  const navigate = useNavigate();
  const setLoginData = () => {
    if (data.useremail && data.password && data.username) {
      axios.post('https://violet-panther-robe.cyclic.app/register', data)
        .then((res) => {
          if (res.data.status === 200) {
           
            swal("Yeah!!", "Register Successfully", "success");
            navigate("/login");
          }
          
          else if (res.data.status === 500) {
            swal("Oops!!", "User Already Exists", "error");
          }
          else {
            swal("Oops!!", "Site Error", "error");
          }
        })
        .catch((err) => {
          console.log(err);
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
        <TextField id="outlined-email" label="Email" type="text" variant="outlined" name="useremail" onChange={changeHandler} sx={{marginBottom:"10px"}}  />
        <TextField id="outlined-email" label="Username" type="text" variant="outlined" name="username" onChange={changeHandler} sx={{marginBottom:"10px"}}  />
        <TextField id="outlined-password" label="Password" type="password" variant="outlined" name="password" onChange={changeHandler}   sx={{marginBottom:"10px"}} />
        <button onClick={setLoginData} >
          SignUp
        </button>
      </div>
    </div>
  )
}

export default SignUp
