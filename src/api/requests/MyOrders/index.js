import { axios } from "../../axios";
import { endpoint } from "../endpoints";

export const MyOrders = async () => {
  const { data } = await axios.get(endpoint.products / MyOrders);
  return data;
};
