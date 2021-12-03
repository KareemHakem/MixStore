import { type } from "./type";

const initialState = {
  isRegister: false,
  user: null,
};

const userAuthInReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN:
      return {
        isRegister: true,
        user: action.payload,
      };
    case type.REGISTER:
      return {
        isRegister: true,
        user: action.payload,
      };

    case type.LOGOUT:
      return {
        isRegister: false,
        user: null,
      };
    default:
      return state;
  }
};

export default userAuthInReducer;
