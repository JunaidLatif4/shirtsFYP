import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom'

import logo from "../../../Assets/images/adminlogo.png";

import { BiShow, BiHide } from "react-icons/bi"

import { toast } from "react-toastify";
import { RegisterAPI } from "../../../API/Auth";

import "./Signup.scss";



const Signup = () => {
  let history = useHistory()

  const [enteredData, setEnteredData] = useState({

    email: "",
    password: ""

  })

  const [show, setShow] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnteredData({
      ...enteredData,
      [name]: value
    })

  }

  const register = async () => {
    let res = await RegisterAPI(enteredData)
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
      toast('User Registered Success', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/login")
    }
  }


  return (
    <div className="main_signup">
      <div className="signup_header">
        <NavLink to={"/"}> <img src={logo} alt="" /> </NavLink>
      </div>
      <div className="signup_card">
        <div className="sign_up_need">
          <div className="sign_up_title">
            <p className="para_bold">Create your account and get styled!</p>
            <p className="para_normal">
              We'll save your style, fit, and budget preferences.
            </p>
          </div>
          <div className="main_inputs">
            <div className="email_input">
              <div className="email_title">Email address</div>
              <div className="email">
                <input type="text" value={enteredData.email} name="email" onChange={handleChange} />
              </div>
            </div>
            <div className="email_input">
              <div className="email_title">Create Password</div>
              <div className="email">
                <input type={show ? "text" : "password"} value={enteredData.password} name="password" onChange={handleChange} />
              <span className="input_icon" onClick={() => setShow(!show)}> {show ? <BiHide /> : <BiShow />} </span>
              </div>
            </div>
          </div>
          <div className="policy">
            By creating an account, you agree to our
            <span className="under_line">Privacy Policy</span> and <br />
            <span className="under_line">Terms & Conditions.</span>
          </div>
          <div className="next_btn">
            <button onClick={register}>Sign up </button>
          </div>
          <div className="alreday">
            Already have an account?
            <NavLink to='/login' style={{ textDecoration: 'none' }}>    <sapn className="under_line">Sign In.</sapn></NavLink>  <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
