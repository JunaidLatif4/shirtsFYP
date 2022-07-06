import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

import logo from "../../../Assets/images/adminlogo.png";

import { toast } from "react-toastify";
import { LoginAPI } from "../../../API/Auth";


import "./Userlogin.scss";


const Userlogin = () => {
  let history = useHistory()

  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setEnteredData({ ...enteredData, [e.target.name]: e.target.value });
  };

  const handelSubmit = async () => {
    let res = await LoginAPI(enteredData)
    if (res.error != null) {
      toast.error(res.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast('Login Success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.setItem("userData", JSON.stringify(res.data.data))
      setTimeout(() => {
        history.push("/")
      }, 1500);
    }
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
                value={enteredData.email}
                onChange={(e) => handelChange(e)}
              />
            </div>
          </div>
          <div className="email_input">
            <div className="email_title">Password *</div>
            <div className="email">
              <input
                type="password"
                name="password"
                value={enteredData.password}
                onChange={(e) => handelChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="login_btn">
        <button onClick={handelSubmit}>Log In</button>
      </div>
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
