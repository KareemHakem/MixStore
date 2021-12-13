import { Types } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoints";
import { errorHandlers } from "../../utils/errorHandlers";

const fetchProductsDetail = (id) => async (dispatch) => {
  dispatch({ type: Types.DETAIL_PRODUCTS_REQUEST });
  try {
    const { data } = await axios.get(`${endpoint.products}/${id}`);
    dispatch({
      type: Types.DETAIL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: Types.DETAIL_PRODUCTS_ERROR,
      payload: error,
    });
    errorHandlers(error);
  }
};

export { fetchProductsDetail };
