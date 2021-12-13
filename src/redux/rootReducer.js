import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import products from "./products/reducer";
import users from "./User/reducer";
import productDetail from "./productDetail/reducer";
import cart from "./cart/reducer";
import userInfo from "./userInfo/reducer";

const persistConfig = {
  key: "Root",
  storage,
  whiteList: ["users", "cart"],
  blacklist: ["products", "productDetail","userInfo"],
};

const rootReducer = combineReducers({
  users,
  products,
  productDetail,
  cart,
  userInfo,
});

export default persistReducer(persistConfig, rootReducer);
