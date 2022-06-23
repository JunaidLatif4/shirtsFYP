import React, { useState } from "react";
import {NavLink} from 'react-router-dom'

import logo from "../../../Assets/images/adminlogo.png";

import "./Signup.scss";

const Signup = () => {

    const [user, setUser]=useState({
        
            email:"",
            role:9,
            passowrd:""

    })

const handleChange=(e)=>{
    const{name,value}=e.target;
    setUser({

        ...user,
        [name]:value
        

    })

}
console.log("password ",user)

const register=()=>{

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
                <input type="text" value={user.email} name="email" onChange={handleChange} />
                {console.log("user",user)}
              </div>
            </div>
            <div className="email_input">
              <div className="email_title">Create Password</div>
              <div className="email">
                <input type="password" value={user.passowrd} name="passowrd" onChange={handleChange}/>
              </div>
            </div>
          </div>
          <div className="policy">
            By creating an account, you agree to our{" "}
            <span className="under_line">Privacy Policy</span> and <br />
            <span className="under_line">Terms & Conditions.</span>
          </div>
          {/* <input type="file" id="img" name="profile" accept="image/*" value={user.profile}  onChange={handleChange} /> */}
          <div className="next_btn">
            <button onClick={register}>Sign up </button>
          </div>

         
          <div className="alreday">
            Already have an account?{" "}
            <NavLink to='/login' style={{textDecoration:'none'}}>    <sapn className="under_line">Sign In.</sapn></NavLink>  <br />
            <span className="under_line">
              Do not sell my personal information
            </span>{" "}
          <span className="under_line_right"> Privacy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
