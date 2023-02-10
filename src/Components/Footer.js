import React,{useState} from 'react'
import "./Home.css";
import axios from 'axios';
import swal from 'sweetalert';
const Footer = () => {
const [data, setdata] = useState({useremail:''})

  const subscribe = () => {
    if (data.useremail) {
      axios.post('http://localhost:8001/subscribe',data)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
            swal("Good job!", "Subscribed Successfully !", "success");
        }
        else if (res.data.status === 500) {
            swal("oops!", "User Already have Subscribed !!", "warning");
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  const changeHandler = (e) => {
    setdata({...data,[e.target.name]:e.target.value})
  }

  return (
    <div className='Home_Footer'>
        <div className='Home_Footer_Container'>
            <div className='Home_Footer_Container_1'>
                <h3>Contest Finder</h3>
                <p>Home</p>
                <p>Terms & Conditions</p>
                <p>FAQ</p>
            </div>
            <div className='Home_Footer_Container_2'>
                <h3>Customer Service</h3>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Privacy Policy</p>

            </div>
          
            <div className='Home_Footer_Container_4'>
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter for latest updates</p>
                <input type="text" placeholder="Enter your email" name="useremail" onChange={changeHandler}/>
                <button onClick={subscribe}>Subscribe</button>
            </div>
        </div>
        
    </div>

  )
}

export default Footer