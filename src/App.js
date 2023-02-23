import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import Home from './Components/Home'
import SignUp from './Components/SignUp'
import NavbarLoggedIn from './Components/Navbar_loggedIn'
import Login from './Components/Login'
import About from './Components/About'
import LeetCode from './SiteComponents/LeetCode'
import Csacademy from './SiteComponents/CsAcademy'
import KickStart from './SiteComponents/KickStart'
import Hackerearth from './SiteComponents/Hackerearth'
import CodeForces from './SiteComponents/CodeForces'
import CodeChef from './SiteComponents/CodeChef'
import MyProfile from './Profile/MyProfile'
import ForgotPassword from './Components/ForgotPassword'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
const App = () => {
  const [login, setlogin] = useState(localStorage.getItem('loginData') ? true : false);
  useEffect(() => {
    _Togggle_Nav();
  }, [login]);

  const _Togggle_Nav = () => {
    if (login === false)
      return <Navbar />
    else {
      return <NavbarLoggedIn loginCheck={loginCheck} />
    }
  }
  const loginCheck = (_Login_Val) => {
    setlogin(_Login_Val)
  }
  return (
    <Router>
      <div className='App'>
        {
          _Togggle_Nav()
        }
        <Routes>
          <Route path='/' element={login === true ? <Home /> : <Login loginCheck={loginCheck} />} />
          <Route path='/myprofile' element={login === true ? <MyProfile /> : <Login loginCheck={loginCheck} />} />
          <Route path='/home' element={login === true ? <Home /> : <Login loginCheck={loginCheck} />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/signUp' element={<SignUp loginCheck={loginCheck} />} />
          <Route path='/login' element={<Login loginCheck={loginCheck} />} />
          <Route path='/hackerearth' element={login === true ? <Hackerearth /> : <Login loginCheck={loginCheck} />} />
          <Route path='/leetcode' element={login === true ? <LeetCode /> : <Login loginCheck={loginCheck} />} />
          <Route path='/csacademy' element={login === true ? <Csacademy /> : <Login loginCheck={loginCheck} />} />
          <Route path='/kickstart' element={login === true ? <KickStart /> : <Login loginCheck={loginCheck} />} />
          <Route path='/codeforces' element={login === true ? <CodeForces /> : <Login loginCheck={loginCheck} />} />
          <Route path='/codechef' element={login === true ? <CodeChef /> : <Login loginCheck={loginCheck} />} />
          <Route path='/forgot_passcode' element={login === true ?<Navigate to='/' />:<ForgotPassword />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer/>
          <div className='Home_Footer_Container_5'>
            <p>© 2023 All Rights Reserved</p>
        </div>
      </div>
    </Router>
  )
}

export default App