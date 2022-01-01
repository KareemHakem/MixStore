import React from "react";
import { useSelector } from "react-redux";
import { UserInfoPage } from "../../../components/userInfoPage";
import { useHistory } from "react-router-dom";


export function UserInfo() {
  const { isRegister } = useSelector((state) => state.users);
  const history = useHistory();
  return (
    <div>
      <div>{isRegister ? <UserInfoPage /> : history.push("/")}</div>
    </div>
  );
}
