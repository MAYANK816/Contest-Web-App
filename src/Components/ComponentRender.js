import React,{useState,useEffect} from 'react'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
const ComponentRender = (props) => {
const [loginData, setloginData] = useState(JSON.parse(localStorage.getItem('loginData')));
useEffect(() => {
  setloginData(JSON.parse(localStorage.getItem('loginData')));
}, [loginData]);
const getMyComponent = () =>  {
  if(loginData===null)
  {
    if(props.name==="signUp")
    return <SignUp loginCheck={props.loginCheck}/>
    else
    return <Login loginCheck={props.loginCheck}/>   
  }
  else {
  if(props.name==="home")
  return <Home/>
  else if(props.name==="about")
  return <>About Us</>
  else if(props.name==="contactus")
  return <>Contact Us</>
  }
}
  return (
    <>
    {getMyComponent()}
    </>
  )
}

export default ComponentRender;