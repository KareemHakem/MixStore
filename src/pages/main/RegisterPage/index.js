import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { userRegisterAuth } from "../../../redux/User/action";

import { UsersAuthNavigation } from "../../../hooks/UsersAuthNavigation";

import RegisterForm from "../../../components/RegisterForm";
import "./style.css";

export function RegisterPage() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.users);
  UsersAuthNavigation();

  const handleRegisterSubmit = (values) => {
    const { firstName, lastName, email, password } = values;
    const body = {
      name: `${firstName} ${lastName}`,
      email,
      password,
    };

    dispatch(userRegisterAuth(body));
  };

  return (
    <RegisterForm
      handleRegisterSubmit={handleRegisterSubmit}
      loading={loading}
    />
  );
}
