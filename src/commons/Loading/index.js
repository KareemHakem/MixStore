import React from "react";
import ReactLoading from "react-loading";
import { COLORS } from "../../styles/colors";
import "./style.css";

export default function Loading({ color = COLORS.blue, visible }) {
  if (visible) {
    return (
      <div className="loading">
        <ReactLoading type="spokes" height={200} width={200} color={color} />
      </div>
    );
  } else {
    return null;
  }
}
