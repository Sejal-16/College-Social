import React from 'react';
import './login.css';

function login() {
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">College Social</h3>
        <span className="loginDesc">
          A platform to connect to Pccoeians!
        </span>
      </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Email" className="loginInput" />
          <input placeholder="Password" className="loginInput" />
          <button className="loginButton">Log In</button>
          <span className="loginForgot">Forgot Password?</span>
          <button className="loginRegisterButton">
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default login;
