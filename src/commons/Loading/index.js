import React from "react";
import Loader from "react-loader-spinner";
import { COLORS } from "../../styles/colors";

export default function Loading({ color = COLORS.blue, visible }) {
  return (
    <Loader
      visible={visible}
      type="Circles"
      color={color}
      height={200}
      width={300}
    />
  );
}
