import React,{useState} from 'react'
import './ForgotPass.css'
import axios from 'axios'
const ForgotPassword = () => {
    const [data, setdata] = useState({ useremail: ''})
    const changeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
      }
    const _Send_Request=async()=>{
      const _API_Response=await axios.post('https://contest-web-app-backend.vercel.app/forgotPassword',data);
      const _API_Response_Data=_API_Response.data;
      if(_API_Response_Data.status===200){
        alert('Email has been sent to your registered email address');
      }
      else{
        alert('No user found');
      }
      
    }
  return (
    <div className='ForgotPassword'>
      <div className='ForgotPasswordData'>
        <h1>Forgot Password!!</h1>
        <p>Enter your registered email address that you had used earlier....</p>
        <label>Email</label>
        <input type='text' name="useremail" placeholder='Enter your email' onChange={changeHandler} required />
        <button onClick={_Send_Request} >
          Submit
        </button>
      </div>
    </div>
  )
}

export default ForgotPassword