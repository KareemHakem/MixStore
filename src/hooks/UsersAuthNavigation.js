import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const UsersAuthNavigation = () => {
  const { isRegister } = useSelector((state) => state.users);
  const history = useHistory();

  useEffect(() => {
    if (isRegister) {
      history.push("/");
    }
  }, [isRegister, history]);
};
