import React, { useEffect } from "react";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { fetchProductsDetail } from "../../../redux/productDetail/action";

import { COLORS } from "../../../styles/colors";
import Loading from "../../../commons/Loading";
import Error from "../../../commons/Error";
import ProductCard from "../../../components/ProductCard";
import { addCartItem } from "../../../redux/cart/action";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function ProductDetailPage() {
  const { loading, product, error } = useSelector(
    (state) => state.productDetail
  );

  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductsDetail(id));
  }, [dispatch, id]);

  const handleAddCartItem = () => {
    dispatch(addCartItem(product));
    history.push("/cart");
  };

  if (loading) return <Loading visible={loading} color={COLORS.lightWithe} />;
  if (error || !product) return <Error />;

  return (
    <div>
      <ProductCard item={product} handleAddCartItem={handleAddCartItem} />
    </div>
  );
}
