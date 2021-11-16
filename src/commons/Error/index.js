import React from "react";
import Image from "../../assets/images/err.png";
import "./style.css";

export default function Error({
  message = "Oops, Something Went wrong in the Server, please try again letter",
}) {
  return (
    <div className="error">
      <img src={Image} alt="error_image" className="img" />
      <text className="error_text"> Sorry </text>
      <text className="message_error"> {message} </text>
    </div>
  );
}
