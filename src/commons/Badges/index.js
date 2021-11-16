import React from "react";
import { COLORS } from "../../styles/colors";
import "./style.css";

export default function Badges({
  onClick,
  text,
  color = COLORS.secondary,
  height,
  width,
}) {
  return (
    <button
      className="main-badges"
      onClick={onClick}
      style={{ backgroundColor: color, height, width }}
    >
      {text}
    </button>
  );
}
