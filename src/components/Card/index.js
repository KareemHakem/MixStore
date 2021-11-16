import React from "react";
import "./style.css";

export default function Card({ handleNavigate, item }) {
  return (
    <div className="card" onClick={() => handleNavigate(item._id)}>
      <img className="img_item" src={item.image} alt="imagItem" />
      <div className="item_des">
        <h3 className="item_name"> {item.name} : </h3>
        <h3 className="item_price"> {item.price}$ </h3>
      </div>
    </div>
  );
}
