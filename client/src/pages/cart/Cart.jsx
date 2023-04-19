import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

import "./style.scss";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <div className="cart__container">
        <h3>Shopping Cart</h3>

        <div className="cart__productList">
          {cart.products.map((product, i) => {
            return (
              <div className="cart__product" key={i}>
                <img
                  src={product.product.image}
                  alt="oooo"
                />
                <div className="cart__productDetail">
                  <h4>{product.product.name}</h4>
                  <p>Rs. {product.product.price}</p>
                </div>
                <div className="cart__productAA">
                  <div className="cart__quantity">
                    <AiOutlineMinusSquare className="quantityBtn" />
                    <button className="span">Qty : {product.quantity}</button>
                    <AiOutlinePlusSquare className="quantityBtn" />
                  </div>
                  <button className="cart__deleteBtn">Delete</button>
                </div>
              </div>
            );
          })}

          {/* <div className='line'></div */}
        </div>
        <div className="cart__totalAmount">
          <h3>Total amount : {cart.total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
