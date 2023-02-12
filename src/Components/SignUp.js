import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "./Login.css"
import axios from 'axios';
import swal from 'sweetalert';
const SignUp = (props) => {
  const [data, setdata] = useState({useremail:'',password:''})
  const navigate=useNavigate();
  const setLoginData = () => {
    if (data.useremail && data.password) {
      axios.post('https://contest-web-app-backend.vercel.app/login',data)
      .then((res) => {  console.log(res);
        if (res.data.status === 200) {
          localStorage.setItem('loginData',JSON.stringify(res.data.alreadyExists))
          props.loginCheck(true);
          navigate("/");
          swal("Yeah!!", "Register Successfully", "success");
        }
      })
      .catch((err) => {
        swal("Oops!", "Please Check details", "error");
      })
    }
  }
  const changeHandler = (e) => {
    setdata({...data,[e.target.name]:e.target.value})
  }

  return (
    <div className='Login_form'>
      <div className='Login_formData'>
      <h1>SignUp</h1>
        <label>Email</label>
        <input type='text' name="useremail" placeholder='Enter your email' onChange={changeHandler} required/>
        <label>Password</label>
        <input type='password' name="password"  placeholder='Enter your password'onChange={changeHandler} required/>
        <button onClick={setLoginData} >
          SignUp
        </button>
    </div>
    </div>
  )
}

export default SignUp