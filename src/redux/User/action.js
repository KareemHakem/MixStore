import { type } from "./type";

const userLogInAuth = (values) => {
  return { type: type.LOGIN, payload: values };
};

const userRegisterAuth = (values) => {
  return { type: type.REGISTER, payload: values };
};

const userLogOutAuth = () => {
  return { tpe: type.LOGOUT };
};

export { userLogInAuth, userRegisterAuth, userLogOutAuth };
