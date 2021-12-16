import { types } from "./type";

const initialState = {
  isSubmit: false,
  userInfo: null,
};

const userInfoSubmitReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_INFO_SUBMIT:
      return {
        isSubmit: true,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};


export default userInfoSubmitReducer;
