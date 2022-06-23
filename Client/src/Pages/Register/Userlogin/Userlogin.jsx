import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../Assets/images/adminlogo.png";

import "./Userlogin.scss";


const Userlogin = () => {

  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setUserCred({ ...userCred, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
  };


  return (
    <div className="Userlogin_main_stylist">
      <div className="Stylist_panel_start">
        <div className="main_panel">
          <div className="panel_header">
            <NavLink to='/' style={{ textDecoration: 'none' }}>  <img src={logo} /> </NavLink>
          </div>
        </div>
      </div>
      <div className="main_admin_flex">
        <div className="admin_title">User Login</div>
        <div className="main_inputs">
          <div className="email_input">
            <div className="email_title">Email *</div>
            <div className="email">
              <input
                type="text"
                name="email"
                value={userCred.email}
                onChange={(e) => handelChange(e)}
              />
            </div>
          </div>
          <div className="email_input">
            <div className="email_title">Password *</div>
            <div className="email">
              <input
                type="text"
                name="password"
                value={userCred.password}
                onChange={(e) => handelChange(e)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <NavLink to="/UsersupportPage" style={{ textDecoration: "none" }}> */}
      <div className="login_btn">
        <NavLink to='/UsersupportPage' style={{ textDecoration: 'none' }}>

          <button onClick={(e) => handelSubmit(e)}>Log In</button>
        </NavLink>
      </div>
      {/* </NavLink> */}

      <div className="or">OR</div>

      <div className="dont_main">
        <div className="dont">
          Don't have an account?
          <NavLink to='/signup' style={{ textDecoration: 'none' }}  >
            <span style={{ color: " #C6A992" }}>Sign up</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
