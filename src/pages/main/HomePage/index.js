import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { fetchProducts } from "../../../api/requests/Products";
import { COLORS } from "../../../styles/colors";
import Loading from "../../../commons/Loading";
import Error from "../../../commons/Error";
import Card from "../../../components/Card";
// import NavBar from "../../../components/NavBar";
// import Footer from "../../../components/Footer";
import "./style.css";

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

  if (loading) return <Loading visible={loading} color={COLORS.lightWithe} />;
  if (error) return <Error />;

  return (
    <div>
      {/* <NavBar /> */}
      <div className="HomePage">
        {products.map((product) => (
          <Card
            key={product._id}
            item={product}
            handleNavigate={handleNavigate}
          />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
