import React from "react";
import { Switch, Route } from "react-router";
import { CartPage } from "../pages/main/CartPage";
import { FavoritePage } from "../pages/main/FavoritePage";
import { HomePage } from "../pages/main/HomePage";
import { LoginPage } from "../pages/main/LoginPage";
import { ProductDetailPage } from "../pages/main/ProductDetailPage";
import { RegisterPage } from "../pages/main/RegisterPage";
import { AdminCreateNew } from "../pages/admin/AdminCreateNew";
import { MyOrderPage } from "../pages/main/MyOrderPage";

export default function Navigation() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products/detail/:id" exact component={ProductDetailPage}
        />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/favorite" exact component={FavoritePage} />
        <Route path="/AdminCreateNew" exact component={AdminCreateNew} />
        <Route path="/MyOrderPage" exact component={MyOrderPage} />
      </Switch>
    </div>
  );
}
