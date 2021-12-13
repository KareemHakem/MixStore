import { type } from "./type";

const initialState = {
  isRegister: false,
  Loading: false,
  user: null,
  error: null,
};

const userAuthInReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN_USER_REQUEST:
      return {
        ...state,
        Loading: true,
      };

    case type.LOGIN_USER_SUCCESS:
      return {
        isRegister: true,
        Loading: false,
        user: action.payload,
        error: null,
      };

    case type.LOGIN_USER_ERROR:
      return {
        ...state,
        Loading: false,
        error: action.payload,
      };

    case type.REGISTER_USER_REQUEST:
      return {
        ...state,
        Loading: true,
      };

    case type.REGISTER_USER_SUCCESS:
      return {
        isRegister: true,
        Loading: false,
        user: action.payload,
        error: null,
      };

    case type.REGISTER_USER_ERROR:
      return {
        ...state,
        Loading: false,
        error: action.payload,
      };

    case type.LOGOUT_USER:
      return {
        isRegister: false,
        user: null,
      };
    default:
      return state;
  }
};

export default userAuthInReducer;
