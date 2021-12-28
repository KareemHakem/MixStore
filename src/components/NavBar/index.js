import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../../assets/images/logo_3.png";
import Avatar from "@mui/material/Avatar";
import { Icon } from "../../assets/FolderIcon";
import DropDownUser from "../../components/DropDownUser";

import "./style.css";


export default function NavBar() {
  const { isRegister } = useSelector((state) => state.users);
  return (
    <div className="nav_bar">
      <div className="left_side">
        <Link className="link_Logo" to="/">
          <img className="logo_image_nav" src={Image} alt="logo_image" />
        </Link>
        <h1 className="logo_name_nav"> Mix Store </h1>
      </div>
      <div className="right_side">
        <ul className="ul_nav_bar_link">
          <li className="li_nav_bar_link">
            {isRegister ? (
              < DropDownUser className="menu-DropDown"  />
            ) : (
              <>
                <Link className="link" to="/logIn">
                  Log In
                </Link>
                <Link className="link" to="/register">
                  Register
                </Link>
              </>
            )}

            <Link className="link_nav_icon" to="/cart">
              <Avatar className="avatar">{Icon.AddShoppingCartIcon}</Avatar>
            </Link>
            <Link className="link_nav_icon" to="/favorite">
              <Avatar className="avatar">{Icon.FavoriteBorderIcon}</Avatar>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
