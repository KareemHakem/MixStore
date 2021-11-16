import React from "react";
import "./style.css"

export default function Input({
  height,
  width,
  placeholder,
  onChange,
  type,
  value,
  Icon,
}) {
  return (
    <div className="input_container" style={{ height, width }}>
      {Icon && <Icon />}
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className="input"
      />
    </div>
  );
}
