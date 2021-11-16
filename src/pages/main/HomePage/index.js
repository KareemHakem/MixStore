import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../api/requests/Products/index";
import Loading from "../../../commons/Loading/index";
import Error from "../../../commons/Error/index";
import Card from "../../../components/Card/index";
import { useHistory } from "react-router";

export function HomePage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const history = useHistory();
  const handleNavigate = (id) => history.push(`/products/detail/${id}`);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((res) => {
        setProducts(res.products);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="HomePage">
      {products.map((product) => (
        <Card
          key={product._id}
          item={product}
          handleNavigate={handleNavigate}
        />
      ))}
    </div>
  );
}
