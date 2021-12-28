import { types } from "./type";

const userInfoSubmit = (values) => {
  return { type: types.USER_INFO_SUBMIT, payload: values };
};

const UserEditInfo = (values) => {
  return { type: types.USER_EDIT_INFO_SUBMIT, payload: values };
};
export { userInfoSubmit, UserEditInfo };
