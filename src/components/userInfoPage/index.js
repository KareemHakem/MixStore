import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserInfoTap from "../UserInfoTap";
import UserAuthInfo from "../UserAuthInfo";
import { UserInfoFormEdit } from "../UserInfoFormEdit";
import { UserAuthInfoFormEdit } from "../UserAuthInfoFormEdit";
import { style } from "./style";
import "./style.css";
import { editUser } from "../../api/requests/users";
import { UserEditInfo } from "../../redux/userInfo/action";

export function UserInfoPage() {
  const { userInfo } = useSelector((state) => state.userInfo);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleEditUserInfoAuthSubmit = (values) => {
    console.log(values, "--->");
    editUser(values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleEditUserInfoSubmit = (values) => {
    const {
      CreditCardNumber,
      CreditCardExpiryNumber,
      phoneNumber,
      city,
      address,
      zipCode,
    } = values;
    const body = {
      CreditCardNumber,
      CreditCardExpiryNumber,
      phoneNumber,
      city,
      address,
      zipCode,
    };
    dispatch(UserEditInfo(body));
  };

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
            <UserInfoFormEdit
              handleEditUserInfoSubmit={handleEditUserInfoSubmit}
            />
          </div>

          <div className="Vertical_Line_user_Info"></div>
          <div>
            <UserAuthInfoFormEdit
              handleEditUserInfoAuthSubmit={handleEditUserInfoAuthSubmit}
            />
          </div>
        </div>
      </diV>
    </div>
  );
}
