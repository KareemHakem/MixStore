import React from "react";
import AddAddressUser from "../../../components/AddAddressUser";
import "./style.css";

export function AddressPage() {
  const handleAddAddressSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <AddAddressUser handleAddAddressSubmit={handleAddAddressSubmit} />
    </div>
  );
}
