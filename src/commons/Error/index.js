import React from "react";
import Image from "../../assets/images/error_404.png";
import "./style.css";

export default function Error({
  message = "Oops, Something Went wrong in the Server, please try again letter",
}) {
  return (
    <div className="error">
      <img src={Image} alt="error_image" className="img" />
      <text className="error_text"> Sorry For Your Error Please look at the :  </text>
      <text className="message_error"> {message} </text>
    </div>
  );
}
