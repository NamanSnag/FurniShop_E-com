import React from "react";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column" id="footer__about">
          <h3>About Us</h3>
          <p>
            Welcome to FurniShop, your go-to destination for stylish and
            affordable furniture and home decor. Our mission is to make it easy
            and convenient for you to create a space you love, without breaking
            the bank.
          </p>
        </div>
        <div className="footer__column" id="footer__cat">
          <h3>Categories</h3>
          <ul>
            <li>Tables</li>
            <li>Stools</li>
            <li>Sofas</li>
            <li>Doors</li>
          </ul>
        </div>
        <div className="footer__column" id="footer__contact">
          <h3>Contact Us</h3>
          <p>Nagpur</p>
          <p>Maharashtra</p>
          <p>contact@ecommerce.com</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2023 FurniShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
