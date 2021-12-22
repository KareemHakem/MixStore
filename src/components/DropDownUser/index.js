import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

export default function DropDownUser() {
  const [toggleMenu, SetToggleMenu] = useState(false);
  const { user } = useSelector((state) => state.users);

  return (
    <>
      <div>
        {toggleMenu ? (
          <div
            className="cancelToggleMenu"
            onClick={() => SetToggleMenu(toggleMenu)}
          >
            {user.name}
          </div>
        ) : (
          <div onClick={() => SetToggleMenu(!toggleMenu)}>{user.name}</div>
        )}

        {toggleMenu && (
          <div className=" menu_container scale-up-center">
            <li>
              <ul className="dropdown_menu">
                <li className="dropdown_item-1">
                  <Link to="/userInfo"> your information </Link>
                </li>
                <li className="dropdown_item-1">
                  <Link to="/userHistory"> Your History </Link>
                </li>
                <li className="dropdown_item-1">
                  <Link to="/Users"> Users </Link>
                </li>
              </ul>
            </li>
          </div>
        )}
      </div>
    </>
  );
}
