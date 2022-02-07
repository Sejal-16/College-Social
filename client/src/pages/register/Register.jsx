import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

function register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">College Social</h3>
          <span className="loginDesc">A platform to connect to Pccoeians!</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton"> Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
