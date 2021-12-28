import React, { useEffect } from "react";

import { useHistory } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../../redux/products/action";

import SwiperHome from "../../../components/SwiperHome";
import { CardContainer } from "./CardContainer";
import { SearchBar } from "../../../components/SearchBar";
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

  return (
    <div className="HomePage">
      <div className="SwiperHome">
        <SwiperHome />
      </div>
      <SearchBar />
      <div>
        <CardContainer
          className="CardSpace"
          handleNavigate={handleNavigate}
          products={products}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
}
