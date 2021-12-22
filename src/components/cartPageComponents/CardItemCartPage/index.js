import React from "react";
import Button from "../../../commons/Button";
import "./style.css";

export default function CardItemCartPage({ item, handleRemoveItem }) {
  return (
    <div>
      <div className="products_cards_cart_page">
        <div className="product_card-cart">
          <img
            className="img_product_card_cart_page"
            src={item.image}
            alt="Ju_img"
          />
          <div className="text_name_product_cart">
            <h3> {item.name} </h3>
            <p> {item.price}$ </p>
            <Button
              width={200}
              onClick={() => handleRemoveItem(item)}
              text="Delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
