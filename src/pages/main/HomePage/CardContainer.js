import React from "react";
import Loading from "../../../commons/Loading";
import Error from "../../../commons/Error";
import Card from "../../../components/Card";
import { COLORS } from "../../../styles/colors";

export  function CardContainer({
  handleNavigate,
  products,
  error,
  loading,
}) {
  if (loading) return <Loading visible={loading} color={COLORS.lightWithe} />;
  if (error) return <Error />;

  return (
    <div className="CardSpace">
      {products?.map((product) => (
        <Card
          key={product._id}
          item={product}
          handleNavigate={handleNavigate}
        />
      ))}
    </div>
  );
}
