import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userLogOutAuth } from "../../redux/User/action";
import Image from "../../assets/images/logo_3.png";
import "./style.css";

export default function Footer() {
  const { isRegister } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(userLogOutAuth());
  return (
    <div className="footer_for_pages">
      <div className="footer_line"></div>

      <div className="footer_sides">
        <div className="lift_side_footer">
          <ul className="ul_footer_page">
            <li className="li_footer_page">
              {isRegister ? (
                <div onClick={handleLogout} className="userNameFooter">
                  Logout
                </div>
              ) : (
                <>
                  <Link className="link_footer" to="/logIn">
                    Log In
                  </Link>
                  <Link className="link_footer" to="/register">
                    Register
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
        <Link className="link_Logo_footer" to="/">
          <img alt="logoImage" src={Image} className="medal_footer" />
        </Link>

        <div className="right_side_footer">
          <ul className="ul_footer_page">
            <li className="li_footer_page">
              <Link className="link_footer" to="/MyOrderPage">
                Make Order
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="copy_text">
        <p> © 2021 Mix Store, Inc. </p>
      </div>
    </div>
  );
}
