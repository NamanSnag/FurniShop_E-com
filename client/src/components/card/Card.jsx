import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import axios from "axios";
import { addProduct } from "../../redux/cart";

const Card = (props) => {
  const { item } = props;
  const [quantity, setQuantity] = useState(1);
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      if(userId != null) {
        await axios.post("/order/add", {
          userId: userId,
          productId: item._id,
          quantity: quantity,
        });
      }
      let payload = {
        product : item,
        price : item.price,
        quantity : quantity
      }
      dispatch(addProduct(payload));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card">
      <div
        className="product__view"
        style={{ backgroundImage: "url(" + item.image }}
      >
        <h4> {item.name} </h4>
      </div>

      <div className="product__description">
        <p className="product__price"> Rs. {item.price}</p>
        <input type="number" min={1} defaultValue={1} className="product__qun" onChange={e => setQuantity(e.target.value)}/>
        <button className="add-btn" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
