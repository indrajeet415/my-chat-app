import React from "react";
import './Style.module.css';
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">My Chat </span>
        <span className="title">Register </span>
          <form className="registerDetails" >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
           <input className="addAvatar" style={{display:"none"}} type="file" id="file" />
           <label htmlFor="file">
            <img src={Add} alt=""/> 
            <span>Add an Avatar</span>
           </label>
          </form>
            <button className="signup">sign up</button>
            <p>
                Do you have an account?login
            </p>
      </div>
    </div>
  );
};

export default Register;