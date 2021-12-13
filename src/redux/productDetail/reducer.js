import { Types } from "./type";

const initialSate = {
  loading: false,
  product: null,
  error: null,
};

const detailProductsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case Types.DETAIL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.DETAIL_PRODUCTS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: null,
      };

    case Types.DETAIL_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailProductsReducer;
