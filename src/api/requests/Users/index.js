import { axios } from "../../axios";
import { endpoint } from "../endpoints";

export const registerUser = async (values) => {
  const { data } = await axios.post(endpoint.users, values);
  return data;
};

export const logInrUser = async (values) => {
  const { data } = await axios.post(endpoint.users, values);
  return data;
};
