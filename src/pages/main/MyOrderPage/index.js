import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userInfoSubmit } from "../../../redux/userInfo/action";
import AddAddressUser from "../../../components/AddAddressUser";
import "./style.css";

export function MyOrderPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAddAddressSubmit = (values) => {
    const { email, phoneNumber, city, address, zipCode } = values;
    const body = {
      email,
      phoneNumber,
      city,
      address,
      zipCode,
    };
    dispatch(userInfoSubmit(body));
    history.push("/");
  };

  return (
    <div>
      <AddAddressUser handleAddAddressSubmit={handleAddAddressSubmit} />
    </div>
  );
}
