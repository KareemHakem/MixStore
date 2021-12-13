import React from "react";
import AdminCreateProduct from "../../../components/AdminCreateProduct";

export function AdminCreateNew() {
  const handleCreateProductsSubmit = (values) => {};
  return (
    <AdminCreateProduct
      handleCreateProductsSubmit={handleCreateProductsSubmit}
    />
  );
}
