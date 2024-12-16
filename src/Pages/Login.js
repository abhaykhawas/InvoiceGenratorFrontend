import React, { useEffect, useState } from 'react'
import { Link, redirect } from "react-router-dom";
import loginFormValidation from '../Components/LoginComponents/loginFormValidation';
import './Styles/login.css'
import axios from 'axios';

function Login() {

  const [emailReq, setEmailReq] = useState(false)
  const [passwordReq, setPasswordReq] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cookieValue, setCookieValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try{
            
                let response = await axios.get('http://localhost:4000/api/v1/check-login', {withCredentials: true})
                console.log(response.status)
                if (response.status != 200){
                    window.location.href = '/login'
                }
            
            
        }
        catch(error) {
            
        }
    }
    fetchData()
  },[])

  async function handleLogin(event) {
    event.preventDefault();
    if (email == "" && password == ""){
        setEmailReq(true)
        setPasswordReq(true)
    }
    else if (email == "") {
        setEmailReq(true)
    }
    else if (password == "") {
        setPasswordReq(true)
    }
    else{
        let payload = {
            "email" : email,
            "password" : password
        }
        const response = await axios.post('http://localhost:4000/api/v1/login', payload, {withCredentials: true});
        console.log(response.data)
        if (response.status == 200 || response.status == 201){
            window.location.href = '/dashboard'
        }
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value)
    setEmailReq(false)
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
    setPasswordReq(false)
  }

  return (
    <div className="container">
      <div className="login-section">
        <div className="login-header">
          <h1>LOG IN</h1>
        </div>
        <form id="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required onChange={handleEmailChange} value={email}/>
            {emailReq ? <p className='errorMessage'>Email Required</p>: null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required onChange={handlePasswordChange} value={password}/>
            {passwordReq ? <p className='errorMessage'>Password Required</p>: null}
          </div>
          <div className="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit" className="submit-btn" onClick={handleLogin}>LOGIN</button>
        </form>
        <div className="create-account">
          <Link to="/signup" className='create-account-link'>Create an Account</Link>
        </div>
      </div>
    </div>
  )
}

export default Login