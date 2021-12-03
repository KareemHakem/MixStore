import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userRegisterAuth } from "../../../redux/User/action";

import { UsersAuthNavigation } from "../../../hooks/UsersAuthNavigation";

import { registerUser } from "../../../api/requests/Users";

import { errorHandlers } from "../../../utils/errorHandlers";

import RegisterForm from "../../../components/RegisterForm";
import "./style.css";

export function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  UsersAuthNavigation();

  const handleRegisterSubmit = (values) => {
    const { firstName, lastName, email, password } = values;
    const body = {
      name: `${firstName} ${lastName}`,
      email,
      password,
    };

    setLoading(true);
    registerUser(body)
      .then((res) => dispatch(userRegisterAuth(res)))
      .catch((error) => errorHandlers(error))
      .finally(() => setLoading(false));
  };

  return (
    <RegisterForm
      handleRegisterSubmit={handleRegisterSubmit}
      loading={loading}
    />
  );
}
