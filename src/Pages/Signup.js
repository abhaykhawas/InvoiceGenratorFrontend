import React from 'react'
import { Link } from "react-router-dom";
import './Styles/login.css'

function Signup() {
  return (
    <div className="container">
      <div className="login-section">
        <div className="login-header">
          <h1>SIGNUP</h1>
        </div>
        <form id="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <div className="terms-condition">
            <input 
              type="checkbox" 
              id="terms" 
              name="terms" 
              required 
            //   checked={termsAccepted} 
            //   onChange={handleCheckboxChange} 
            />
            <label htmlFor="terms" className='labelTerms'>
              I accept the <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
            </label>
          </div>
          <br/>
          <button type="submit" className="submit-btn">SIGNUP</button>
        </form>
        <div className="create-account">
          Have Account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup