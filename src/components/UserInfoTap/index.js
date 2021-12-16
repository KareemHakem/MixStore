import React from "react";
import "./style.css";

export default function UserInfoTap({ user }) {
  return (
    <div className="userInfo__tap">
      <div>
        <h2> Email : </h2>
        <div className="user_info">
          <p> {user.email} </p>{" "}
        </div>
        <div className="user_info_line"></div>
        <h2> Address : </h2>
        <div className="user_info">
          <p> {user.address} </p>
        </div>
        <div className="user_info_line"></div>
        <h2> Phone Number </h2>
        <div className="user_info">
          <p> {user.phoneNumber} </p>{" "}
        </div>
        <div className="user_info_line"></div>
        <h2> City </h2>
        <div className="user_info">
          <p> {user.city} </p>{" "}
        </div>
        <div className="user_info_line"></div>
        <h2> Zip Code </h2>
        <div className="user_info">
          <p> {user.zipCode} </p>{" "}
        </div>
      </div>
    </div>
  );
}
