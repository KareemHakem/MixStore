import { axios } from "../../axios/index";
import { endpoint } from "../endpoints";

export const fetchProducts = async () => {
  const { data } = await axios.get(endpoint.products);
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`${endpoint.products}/${id}`);
  return data;
};
