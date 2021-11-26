import React, { useEffect, useState } from "react";
import { registerUser } from "../../../api/requests/Users";
import RegisterForm from "../../../components/RegisterForm";
import { errorHandlers } from "../../../utils/errorHandlers";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";
import "./style.css";
import { useHistory } from "react-router";

export function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const history = useHistory();

  const handleRegisterSubmit = (values) => {
    const { firstName, lastName, email, password } = values;
    const body = {
      name: `${firstName} ${lastName}`,
      email,
      password,
    };
    setLoading(true);
    registerUser(body)
      .then((res) => {
        setUser(res);
        toast.success("Welcome, in Juicy Store");
      })
      .catch((error) => errorHandlers(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (user.email) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <RegisterForm
      handleRegisterSubmit={handleRegisterSubmit}
      loading={loading}
    />
  );
}
