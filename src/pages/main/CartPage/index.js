import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItemCartPage from "../../../components/cartPageComponents/CardItemCartPage";
import CardShippingCartPage from "../../../components/cartPageComponents/CardShippingCartPage";
import CardPaymentCartPage from "../../../components/cartPageComponents/CardPaymentCartPage";
import CardTotalCartProductPage from "../../../components/cartPageComponents/CardTotalCartProductPage";
import image from "../../../assets/images/pngwings.png";
import "./style.css";
import { removeCartItem, removeAllCartItem } from "../../../redux/cart/action";
import { useHistory } from "react-router-dom";

export function CartPage() {
  const { cartItem } = useSelector((state) => state.cart);
  const { isRegister } = useSelector((state) => state.users);
  const { userInfo } = useSelector((state) => state.userInfo);
  const { user } = useSelector((state) => state.users);
  const { product } = useSelector((state) => state.productDetail);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item));
  };

  const handleClear = () => {
    dispatch(removeAllCartItem());
  };

  const handleNavigationChickOut = () => {
    isRegister ? history.push("/") : history.push("/login");
  };

  return (
    <div className="full_page_cart">
      <div className="cart_holder">
        <div className="left_side_cart">
          <div>
            <img className="bagImage_cart" src={image} alt="img" />
            <h2 className="mienTextCardCartPage"> Confirm & Pay </h2>
          </div>
          {cartItem.map((item) => (
            <CardItemCartPage
              item={item}
              key={item._id}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
        <div className="right_side_cart">
          <CardShippingCartPage user={user} userInfo={userInfo} />
          <CardPaymentCartPage product={product} userInfo={userInfo} />
          <CardTotalCartProductPage product={product} />
        </div>
      </div>
      <p style={{ backgroundColor: "red" }} onClick={handleClear}>
        Clear
      </p>
      <button
        style={{ backgroundColor: "green" }}
        onClick={handleNavigationChickOut}
      >
        chick out
      </button>
    </div>
  );
}
