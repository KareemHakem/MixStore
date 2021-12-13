import { types } from "./type";

const initialState = {
  cartItem: [],
};

const cartItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CART_ITEM:
      return {
        cartItem: [...state.cartItem, action.payload],
      };
    case types.REMOVE_CART_ITEM:
      return {
        cartItem: state.cartItem.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };
    case types.REMOVE_ALL_CART_ITEM:
      return {
        cartItem: [],
      };
    default:
      return state;
  }
};

export default cartItemReducer;
