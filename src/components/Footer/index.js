import React from "react";
import Image from "../../assets/images/logo_2.png";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_line"></div>

      <div className="footer_sides">
        <div className="lift_side_footer"></div>

        <img alt="logoImage" src={Image} className="medal_footer" />

        <div className="right_side_footer"></div>
      </div>

      <div>
        <p> © 2021 Mix Store, Inc. </p>
      </div>
    </div>
  );
}
  