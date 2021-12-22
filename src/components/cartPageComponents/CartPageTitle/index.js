import React from "react";
import image from "../../../assets/images/pngwings.png";
import "./style.css";
import "./style.css";

export function CartPageTitle() {
  return (
    <div className="title_cart_page">
      <img className="bagImage_cart" src={image} alt="img" />
      <h2 className="mienTextCardCartPage"> Confirm & Pay </h2>
    </div>
  );
}
