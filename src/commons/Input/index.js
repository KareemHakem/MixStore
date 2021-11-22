import React from "react";
import "./style.css";

export default function Input({ Icon, width, margin, ...props }) {
  return (
    <div
      className="input_container"
      style={{
        width,
        margin,
      }}
    >
      {Icon && <Icon />}
      <input {...props} className="input" />
    </div>
  );
}
