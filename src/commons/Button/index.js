import React from "react";
import { COLORS } from "../../styles/colors";
import "./style.css";

export default function Button({
  text,
  disabled,
  color = COLORS,
  height,
  width,
  margin,
  ...props
}) {
  return (
    <button
      text={text}
      className={disabled ? "disabled_button" : "main-button"}
      style={{
        backgroundColor: color,
        width,
        height,
        margin,
      }}
      {...props}
    >
      {text}
    </button>
  );
}
