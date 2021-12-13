import React from "react";
import "./style.css";

export default function CardItemCartPage({ item, handleRemoveItem }) {
  console.log(item, "kareem item her");
  return (
    <div>
      <div className="products_cards_cart_page">
        <div className="product_card_cart_page">
          <img
            className="img_product_card_cart_page"
            src={item.image}
            alt="Ju_img"
          />
          <h3 className="text_name_product_cart"> {item.name} </h3>
          <p className="text_name_product_cart"> {item.price} </p>
          <h2 onClick={() => handleRemoveItem(item)}> x </h2>
        </div>
      </div>
    </div>
  );
}
