import React from "react";
import { useDispatch, useSelector } from "react-redux";

import './style.scss'

const Card = (props) => {
  const {item} = props;

  const cart = useSelector(state=> state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    
    e.preventDefault();
    
  }

  return (
    <div className="card">
      <div
        className="product__view"
        style={{backgroundImage: 'url(' + item.image}}
      >
        <h4> {item.name} </h4>
      </div>

      <div className="product__description">
        <p className="product__price"> Rs. {item.price}</p>

        <button className="add-btn" onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
