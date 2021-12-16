import React from "react";
import { useSelector } from "react-redux";
import UserInfoTap from "../UserInfoTap";
import UserAuthInfo from "../UserAuthInfo";
import { UserInfoFormEdit } from "../UserInfoFormEdit";
import { UserAuthInfoFormEdit } from "../UserAuthInfoFormEdit";
import { style } from "./style";
import "./style.css";

export function UserInfoPage() {
  const { userInfo } = useSelector((state) => state.userInfo);
  const { user } = useSelector((state) => state.users);
  return (
    <div style={style} className="userInfo_page">
      <div>
        <UserAuthInfo userAuth={user} />
        <UserInfoTap user={userInfo} />
      </div>
      <diV className="user_Edit_Forms">
        <h2 className="text_UserInfo_Edit"> Edit your Information </h2>
        <div className="Form_Edit_Input">
          <div className="userInfo_Form">
            <UserInfoFormEdit />
          </div>

          <div className="Vertical_Line_user_Info"></div>
          <div>
            <UserAuthInfoFormEdit />
          </div>
        </div>
      </diV>
    </div>
  );
}
