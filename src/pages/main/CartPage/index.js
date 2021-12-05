import React from "react";
import CardItemCartPage from "../../../components/cartPageComponents/CardItemCartPage";
import CardShippingCartPage from "../../../components/cartPageComponents/CardShippingCartPage";
import CardPaymentCartPage from "../../../components/cartPageComponents/CardPaymentCartPage";
import CardTotalCartProductPage from "../../../components/cartPageComponents/CardTotalCartProductPage";
import image from "../../../assets/pngwings.png";
import "./style.css";

export function CartPage() {
  return (
    <div className="full_page_cart">
      <div className="cart_holder">
        <div className="left_side_cart">
          <div>
            <img className="bagImage_cart" src={image} alt="img" />
            <h2 className="mienTextCardCartPage"> Confirm & Pay </h2>
          </div>
          <CardItemCartPage />
        </div>
        <div className="right_side_cart">
          <CardShippingCartPage />
          <CardPaymentCartPage />
          <CardTotalCartProductPage />
        </div>
      </div>
    </div>
  );
}
