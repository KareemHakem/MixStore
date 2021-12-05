import React from "react";
import "./style.css";

export default function CardTotalCartProductPage() {
  return (
    <div>
      <div className="pay_card_text">
        <p>Taxes:</p> <p>Free</p>
      </div>
      <div className="pay_card_text_total">
        <p>Total:</p> <p>$36.00</p>
      </div>
    </div>
  );
}
