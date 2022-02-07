import React from "react";
import { useRef } from "react";
import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">College Social</h3>
          <span className="loginDesc">A platform to connect to Pccoeians!</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button type="submit" className="loginButton">
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
