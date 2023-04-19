import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userAuth";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // handle logout
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <div className="navbar">
      <nav className="navContainer">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/9360/9360923.png"
              alt="logo"
            />
            <p id="nav__name">
              <span style={{ color: "#ffbab1" }}>F</span>urni
              <span style={{ color: "#ffaa00" }}>S</span>hop
            </p>
          </div>
        </Link>
        {user.currentUser != null ? (
          <div className="navItems">
            <button
              className="navButton"
              style={{
                color: "yellow",
                backgroundColor: "red",
                border: "none",
              }}
              id="ti_user"
            >
              {user.currentUser}
            </button>
            {user.isAdmin && <button className="navButton"> Admin </button>}
            <button className="navButton" onClick={handleLogOut}>
              Logout
            </button>
            <div className="nav__cart">
              <Link to={"/cart"} className="cart">
                <AiOutlineShoppingCart className="cartLogo" />
              </Link>
              <div className="items">{quantity}</div>
            </div>
          </div>
        ) : (
          <div className="navItems">
            <Link to={"/register"}>
              <button className="navButton">Register</button>
            </Link>
            <Link to={"/login"}>
              <button className="navButton">Login</button>
            </Link>
            <div className="nav__cart">
              <Link to={"/cart"} className="cart">
                <AiOutlineShoppingCart className="cartLogo" />
              </Link>
              <div className="items">{quantity}</div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
