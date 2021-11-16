import React from "react";
import { sources } from "../../assets/src";
import "./style.css";

export default function Card({ image, item, price }) {
  return (
    <div className="card">
      <img
        className="img_item"
        src={sources.cardImage}
        alt="imagItem"
      />
      <div className="item_des">
        <h3 className="item_name"> {item} : </h3>
        <h3 className="item_price"> $ {price} </h3>
      </div>
    </div>
  );
}
