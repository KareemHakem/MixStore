import React from "react";
import { useField } from "formik";
import { FormControl } from "@mui/material";
import Input from "../../commons/Input";
import "./style.css";

export const FormInput = ({ Icon, width, margin, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl error={meta.touched && !!meta.error}>
      <Input Icon={Icon} width={width} margin={margin} {...props} {...field} />
      {meta.touched && meta.error && (
        <p className="error_input_message"> {meta.error} </p>
      )}
    </FormControl>
  );
};
