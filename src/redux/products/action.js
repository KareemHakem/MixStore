import { productsTypes } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoints";
import { errorHandlers } from "../../utils/errorHandlers";


const fetchProduct = () => async (dispatch) => {
  dispatch({ type: productsTypes.PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get(endpoint.products);
    dispatch({ type: productsTypes.PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: productsTypes.PRODUCTS_ERROR, payload: error });
    errorHandlers(error);
  }
};

export { fetchProduct };
