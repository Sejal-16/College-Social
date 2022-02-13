import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordCheck = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordCheck.current.value) {
      passwordCheck.current.setCustomValidity("Password Do Not Match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post(process.env.REACT_APP_API + "auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
              placeholder="Username"
              type="text"
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              type="email"
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              ref={password}
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              type="password"
              ref={passwordCheck}
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button
              className="loginRegisterButton"
              type="button"
              onClick={() => {
                history.push("/login");
              }}
            >
              {" "}
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
