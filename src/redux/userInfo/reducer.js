import { types } from "./type";

const initialSate = {
  isSubmit: false,
  userInfo: null,
  error: null,
};

const userSubmitReducer = (state = initialSate, action) => {
  switch (action.type) {
    case types.USER_INFO_SUBMIT:
      return {
        isSubmit: true,
        userInfo: action.payload.values,
        error: null,
      };
    default:
      return state;
  }
};

export default userSubmitReducer;
