import React from "react";
import { useSelector } from "react-redux";
import UserInfoTap from "../../../components/UserInfoTap";
import UserAuthInfo from "../../../components/UserAuthInfo";
import { style } from "./style";

export function UserInfo() {
  const { userInfo } = useSelector((state) => state.userInfo);
  const { user } = useSelector((state) => state.users);
  return (
    <div style={style} className="userInfo_page">
      <UserAuthInfo userAuth={user} />
      <UserInfoTap user={userInfo} />
    </div>
  );
}
