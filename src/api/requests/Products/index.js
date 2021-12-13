import { axios } from "../../axios/index";
import { endpoint } from "../endpoints";

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`${endpoint.products}/${id}`);
  return data;
};
