import React,{useState} from 'react'
import './ForgotPass.css'
import axios from 'axios'
import swal from 'sweetalert';
const ForgotPassword = () => {
    const [data, setdata] = useState({ useremail: ''})
    const changeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
      }
    const _Send_Request=async()=>{
      axios.post('https://contest-web-app-backend.vercel.app/forgotPassword', data)
        .then((res) => {
          
          if (res.data.status === 200) {
            
            swal("Yeah!!", "Password Reset mail sent", "success");
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