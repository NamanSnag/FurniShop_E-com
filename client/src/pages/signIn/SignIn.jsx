import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/userAuth";
import { getProducts } from "../../redux/cart";

import "./style.scss";

const SignIn = () => {
  const [authData, setAuthData] = useState({
    email: null,
    password: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuthChange = ({ currentTarget: input }) => {
    setAuthData((prev) => ({ ...prev, [input.name]: input.value }));
  };

  // hitting register api
  const handleSignIn = async (e) => {
    e.preventDefault();
    const URL = "/user/login";
    try {
      const res = await axios.post(URL, authData);
      if (res.status === 200) {
        let payload = {
          id: res.data.details._id,
          isAdmin: res.data.details.isAdmin,
          name: res.data.details.name
        };
        dispatch(logIn(payload));
        const response = await axios.get(`/order/${res.data.details._id}`);
        let orders = response.data.orders[0];
        let quantity = orders.products.length;
        payload = {
          products: orders.products,
          quantity: quantity,
          total: orders.total
        }
        dispatch(getProducts(payload))
        await alert(res.data.msg);
        navigate("/");
        return;
      }
      alert(res.data.message);
      return;
    } catch (error) {
      return error;
    }
  };
  

  return (
    <div className="auth">
      <div className="container">
        <div className="drop">
          <div className="content">
            <h2 className="animate__heartBeat">Log In</h2>
            <form onSubmit={handleSignIn}>
              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
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
                <input type="submit" value="Log In" id="form_btn" />
              </div>
            </form>
          </div>
        </div>
        {/* <a href="#" class='btn signup'>Signup</a> */}
      </div>
      <Link to="/register" className="btn">
        Sign Up
      </Link>
    </div>
  );
};

export default SignIn;
