import { axios } from "../../axios/index";
import { endpoint } from "../endpoints";

export const fetchProducts = async () => {
  const { data } = await axios.get(endpoint.products);
  return data;
};
