import React, { useEffect } from "react";

import { useHistory } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../../redux/products/action";

import Loading from "../../../commons/Loading";
import Error from "../../../commons/Error";
import Card from "../../../components/Card";
import SwiperHome from "../../../components/SwiperHome";
import { COLORS } from "../../../styles/colors";
import "./style.css";

export function HomePage() {
  const { error, loading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNavigate = (id) => {
    history.push(`/products/detail/${id}`);
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (loading) return <Loading visible={loading} color={COLORS.lightWithe} />;
  if (error) return <Error />;

  return (
    <div>
      <div className="HomePage">
        <div className="SwiperHome">
          <SwiperHome />
        </div>

        {products?.map((product) => (
          <Card
            key={product._id}
            item={product}
            handleNavigate={handleNavigate}
          />
        ))}
      </div>
    </div>
  );
}
