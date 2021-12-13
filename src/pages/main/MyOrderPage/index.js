import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddAddressUser from "../../../components/AddAddressUser";
import { addUserInfo } from "../../../redux/userInfo/action";
import "./style.css";

export function MyOrderPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddAddressSubmit = (values) => {
    const { email, phoneNumber, city, address, zipCode } = values;
    const body = { email, phoneNumber, city, address, zipCode };
    dispatch(addUserInfo(body));
  };

  return (
    <div>
      <AddAddressUser handleAddAddressSubmit={handleAddAddressSubmit} />
    </div>
  );
}
