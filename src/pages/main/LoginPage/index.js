import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { userLogInAuth } from "../../../redux/User/action";

import { UsersAuthNavigation } from "../../../hooks/UsersAuthNavigation";

import LoginForm from "../../../components/LoginForm";
import "./style.css";

export function LoginPage() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.users);

  UsersAuthNavigation();

  const handleLoginSubmit = (values) => {
    const { email, password } = values;
    const body = { email, password };
    dispatch(userLogInAuth(body));
  };

  return <LoginForm handleLoginSubmit={handleLoginSubmit} loading={loading} />;
}
