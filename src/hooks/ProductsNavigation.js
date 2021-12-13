import { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function ProductsNavigation() {
  const { products } = useSelector((state) => state.products);
  const history = useHistory();

  useEffect(() => {
    if (products) {
      history.push("/");
    }
  }, [products, history]);
}
