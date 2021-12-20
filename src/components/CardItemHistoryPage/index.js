import React from "react";
import image from "../../assets/images/logo_1.png";
import "./style.css";

export function CardItemHistoryPage() {
  return (
    <div className="CardItemHistoryPage">
      <h1 className="card_product_history-title"> your orders </h1>
      <div className="card_product_history">
        <img
          className="card_product_history-image-item"
          src={image}
          alt="imageCard"
        />

        <div className="Card_detail_product_history">
          <div className="Card_detail_product_history-name-item">
            <h3 className="Card_detail_product_history-name-item-name">
              Juice Name
            </h3>
            <h3 className="Card_detail_product_history-name-item-price">
              12.20$
            </h3>
          </div>
          <div className="Card_detail_product_history-description-item">
            <p>description products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
