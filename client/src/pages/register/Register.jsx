import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./style.scss";

const Rigester = () => {
  const [authData, setAuthData] = useState({
    email: null,
    name: null,
    password: null,
    phone: null,
    address: null,
  });

  const navigate = useNavigate();

  const handleAuthChange = ({ currentTarget: input }) => {
    setAuthData((prev) => ({ ...prev, [input.name]: input.value }));
  };

  // hitting register api
  const handleSignUp = async (e) => {
    e.preventDefault();
    const URL = "/user/register";
    try {
      const res = await axios.post(URL, authData);
      if (res.status === 201) {
        navigate("/login");
      } else {
        alert("Error: " + res.data.message);
        return;
      }
    } catch (error) {
      alert("Error: " + error);
      return error;
    }
    navigate("/login");
  };

  return (
    <div className="auth">
      <div className="container">
        <div className="content">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleAuthChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Username"
                onChange={handleAuthChange}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleAuthChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="phone"
                placeholder="Phone No."
                onChange={handleAuthChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="address"
                placeholder="address"
                onChange={handleAuthChange}
              />
            </div>
            <div className="input-box">
              <input type="submit" value="Sign Up" id="form_btn" />
            </div>
          </form>
        </div>
      </div>
      <Link to="/login" className="btn">
        Log In
      </Link>
      {/* <a href="#" class='btn signup'>Signup</a> */}
    </div>
  );
};

export default Rigester;
