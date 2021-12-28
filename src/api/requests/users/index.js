import { axios } from "../../axios";
import { endpoint } from "../endpoints";

export const editUser = async (values) => {
  const { data } = await axios.put(
    `${endpoint.users}/${endpoint.profile}`,
    values
  );
  return data;
};
