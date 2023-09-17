import React from "react";
import "./Style.module.css";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">My Chat </span>
        <span className="title">Login </span>
        <form className="registerDetails">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
        </form>
        <button className="signin">signin</button>
        <p>Don't have an account?Register</p>
      </div>
    </div>
  );
};

export default Login;
