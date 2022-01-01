import React from "react";
import CardShippingCartPage from "../../../components/cartPageComponents/CardShippingCartPage";
import CardPaymentCartPage from "../../../components/cartPageComponents/CardPaymentCartPage";
import CardTotalCartProductPage from "../../../components/cartPageComponents/CardTotalCartProductPage";
import { useSelector } from "react-redux";
import Button from "../../../commons/Button";
import "./style.css";

export function RightSideComponents({ handleClear, handleNavigationChickOut }) {
  const { userInfo } = useSelector((state) => state.userInfo);
  const { user } = useSelector((state) => state.users);
  const { product } = useSelector((state) => state.productDetail);
  return (
    <div className="right_side_Cart_page">
      <div className="right_side_Cart-components">
        <CardShippingCartPage user={user} userInfo={userInfo} />

        <CardPaymentCartPage product={product} userInfo={userInfo} />

        <CardTotalCartProductPage product={product} />
      </div>
      <div className="right_side_Cart_page-btn">
        <Button text="Clear" width={100} onClick={handleClear} />
        <Button
          className="right_side_Cart_page-btn-btn"
          text="Check Out"
          width={200}
          onClick={handleNavigationChickOut}
        />
      </div>
    </div>
  );
}
