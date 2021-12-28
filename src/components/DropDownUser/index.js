import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useToggle from "../../hooks/useToggle";
import { useComponentVisible } from "../../hooks/useComponentVisible";
import "./style.css";

export default function DropDownUser() {
  const { value: toggleMenu, handleToggle } = useToggle(false);
  const { user } = useSelector((state) => state.users);
  const { ref, isComponentVisible } = useComponentVisible(document);

  useEffect(() => {
    if (isComponentVisible === false) {
      handleToggle(false);
    }
  }, [isComponentVisible]);

  return (
    <div>
      <div ref={ref}>
        {toggleMenu ? (
          <div className="cancelToggleMenu" onMouseOver={handleToggle}>
            {user.name}
          </div>
        ) : (
          <div onMouseOver={handleToggle}>{user.name}</div>
        )}

        {toggleMenu && isComponentVisible && (
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
    </div>
  );
}
