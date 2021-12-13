import { productsTypes } from "./type";

const initialSate = {
  loading: false,
  products: null,
  error: null,
};

const productReducer = (state = initialSate, action) => {
  switch (action.type) {
    case productsTypes.PRODUCTS_REQUEST:
      return {
        ...state,
        Loading: true,
      };

    case productsTypes.PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        error: null,
      };

    case productsTypes.PRODUCTS_ERROR:
      return {
        loading: false,
        products: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;