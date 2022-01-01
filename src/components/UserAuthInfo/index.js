import React from "react";
import "./style.css";

export default function UserAuthInfo({ userAuth }) {
  return (
    <div>
      <h2 className="user_info_auth_name"> Name : </h2>
      <div className="user_info">
        <p className="user_info_auth"> {userAuth.name} </p>
      </div>
      <div className="user_info_line"></div>
      <h2 className="user_info_auth_name"> Email : </h2>
      <div className="user_info">
        <p> {userAuth.email} </p>
      </div>
      <div className="user_info_line"></div>
    </div>
  );
}
