import { type } from "./type";
import { axios } from "../../api/axios";
import { endpoint } from "../../api/requests/endpoints";
import { errorHandlers } from "../../utils/errorHandlers";

const userLogInAuth = (values) => async (dispatch) => {
  dispatch({ type: type.LOGIN_USER_REQUEST });

  try {
    const { data } = await axios.post(
      `${endpoint.users}/${endpoint.login}`,
      values
    );
    dispatch({ type: type.LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    errorHandlers(error);
    dispatch({ type: type.LOGIN_USER_ERROR, payload: error });
  }
};

const userRegisterAuth = (values) => async (dispatch) => {
  dispatch({ type: type.REGISTER_USER_REQUEST });

  try {
    const { data } = await axios.post(endpoint.users, values);
    dispatch({ type: type.LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    errorHandlers(error);
    dispatch({ type: type.REGISTER_USER_ERROR, payload: error });
  }
};

const userLogOutAuth = () => {
  return { type: type.LOGOUT_USER };
};

export { userLogInAuth, userRegisterAuth, userLogOutAuth };
