import { types } from "./type";

const addUserInfo = (values) => {
  return {
    type: types.USER_INFO_REQUEST,
    payload: values,
  };
};


export { addUserInfo };
