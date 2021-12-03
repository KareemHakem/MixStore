import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { userLogInAuth } from "../../../redux/User/action";

import { UsersAuthNavigation } from "../../../hooks/UsersAuthNavigation";

import { logInrUser } from "../../../api/requests/Users";

import { errorHandlers } from "../../../utils/errorHandlers";

import LoginForm from "../../../components/LoginForm";
import "./style.css";

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  UsersAuthNavigation();

  const handleLoginSubmit = (values) => {
    const { email, password } = values;
    const body = {
      email,
      password,
    };

    setLoading(true);
    logInrUser(body)
      .then((res) => dispatch(userLogInAuth(res)))
      .catch((error) => errorHandlers(error))
      .finally(() => setLoading(false));
  };

  return <LoginForm handleLoginSubmit={handleLoginSubmit} loading={loading} />;
}
