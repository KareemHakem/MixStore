import React from "react";
import { Icon } from "../../../assets/FolderIcon";
import "./style.css";

export default function CardPaymentCartPage({ userInfo }) {
  return (
    <div>
      <div className="card_pay_cart">
        <h3 className="text_card_shipping"> Payment</h3>
        <div className="icon_text_shipping">
          <div> {Icon.CreditScoreIcon} </div>
          <div className="icon_text_shipping">
            <p className="name_card_shipping"> {userInfo.CreditCardNumber} </p>
            <p className="name_card_shipping">
              Exp {userInfo.CreditCardExpiryNumber} 765
            </p>
          </div>
        </div>
        <div className="icon_text_shipping">
          <div>{Icon.CheckIcon}</div>
          <p className="name_card_shipping"> {userInfo.address} </p>
        </div>
      </div>
      <div className="card_total_cart">
        <div className="pay_card_text">
          {/* <p>Subtotal:</p> <p>$ {product.price} </p> */}
        </div>
      </div>
    </div>
  );
}
