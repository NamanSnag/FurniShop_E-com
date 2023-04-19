import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './style.scss'

const Header = () => {

  const user = useSelector(state => state.user);
  return (
    <div className="header">
      <div className="marginTop"></div>
      <div className="headerContainer">
        <div className="headerText">
          <h1 className="slogan">
          Revamp <span style={{ color: "orange" }}>your space</span>
            <br />
            with our <span style={{ color: "orange" }}>vast Selection</span>
            <br />
            of furniture <br />
            <span style={{ color: "orange" }}>&</span> decore
          </h1>

          <p className="headerDesc">
            Get rewarded on shop , – unlock instant savings of{" "}
            <span style={{ color: "rgb(255, 226, 4)" }}>10%</span> or more with
            a free <span style={{ color: "rgb(255, 226, 4)" }}>FurniShop</span>{" "}
            account
          </p>

          <div>
            {(user.currentUser === null) ? (
              <Link to={'/register'}><button className="headerBtn">Sign in / Register</button></Link>
            ) : (
              <button className="headerBtn">FurniShop</button>
            )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
