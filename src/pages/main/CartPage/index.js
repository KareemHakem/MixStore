import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItemCartPage from "../../../components/cartPageComponents/CardItemCartPage";
import { RightSideComponents } from "../../../components/cartPageComponents/RightSideComponents";
import { CartPageTitle } from "../../../components/cartPageComponents/CartPageTitle";
import { removeCartItem, removeAllCartItem } from "../../../redux/cart/action";
import { useHistory } from "react-router-dom";
import "./style.css";

export function CartPage() {
  const { cartItem } = useSelector((state) => state.cart);
  const { isRegister } = useSelector((state) => state.users);

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
    <div>
      <CartPageTitle />
      <div className="full_page_cart">
        <div className="left_side_cart">
          {cartItem.map((item) => (
            <CardItemCartPage
              item={item}
              key={item._id}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
        <div>
          <RightSideComponents
            handleClear={handleClear}
            handleNavigationChickOut={handleNavigationChickOut}
          />
        </div>
      </div>
    </div>
  );
}
