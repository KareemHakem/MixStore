import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/logo_2.png";
import Avatar from "@mui/material/Avatar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./style.css";

export default function NavBar() {
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
            <Link className="link" to="/logIn">
              Log In
            </Link>
            <Link className="link" to="/register">
              Register
            </Link>
            <Link className="link_nav_icon" to="/cart">
              <Avatar className="avatar">
                <AddShoppingCartIcon />
              </Avatar>
            </Link>
            <Link className="link_nav_icon" to="/favorite">
              <Avatar className="avatar">
                <FavoriteBorderIcon />
              </Avatar>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
