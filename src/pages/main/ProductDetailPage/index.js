import React, { useEffect, useState } from "react";
import { fetchProduct } from "../../../api/requests/Products";
import { useParams } from "react-router";
import Loading from "../../../commons/Loading";
import Error from "../../../commons/Error";
import ProductCard from "../../../components/ProductCard";
import { COLORS } from "../../../styles/colors";

export function ProductDetailPage() {
  const [loading, setLoading] = useState(false);
  const [theProduct, setTheProduct] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchProduct(id)
        .then((res) => setTheProduct(res))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Loading visible={loading} color={COLORS.lightWithe} />;
  if (error) return <Error />;

  return (
    <div>
      <ProductCard item={theProduct} />
    </div>
  );
}
