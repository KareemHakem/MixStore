import React from "react";
import ReactLoading from "react-loading";
import "./style.css";

export default function Button({
  text,
  disabled,
  height,
  width,
  margin,
  loading,
  ...props
}) {
  return (
    <button
      text={text}
      className={disabled ? "disabled_button" : "main-button"}
      disabled={loading || disabled}
      style={{
        width,
        height,
        margin,
        opacity: loading ? 0.6 : 1,
      }}
      {...props}
    >
      {loading ? (
        <ReactLoading type="spin" width={20} height={20} color={"gray"} />
      ) : (
        text
      )}
    </button>
  );
}
