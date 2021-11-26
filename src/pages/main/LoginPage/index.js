import React, { useEffect, useState } from "react";
import LoginForm from "../../../components/LoginForm";
import { logInrUser } from "../../../api/requests/Users";
import { toast } from "react-toastify";
import { errorHandlers } from "../../../utils/errorHandlers";
import "./style.css";
import { useHistory } from "react-router";

export function LoginPage() {
  const [user, setUser] = useState({ user: "email" });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLoginSubmit = (values) => {
    const { email, password } = values;
    const body = {
      email,
      password,
    };

    setLoading(true);
    logInrUser(body)
      .then((res) => {
        setUser(res);
        toast.success("Welcome To Mix Store ");
      })
      .catch((error) => errorHandlers(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (user._id) {
      history.push("/");
    }
  }, [user, history]);

  return <LoginForm handleLoginSubmit={handleLoginSubmit} loading={loading} />;
}
