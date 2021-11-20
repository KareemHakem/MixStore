import Button from "../../../commons/Button";
import React from "react";
import Input from "../../../commons/Input";
import "./style.css";

export function RegisterPage() {
  return (
    <div className="regis_forms_Page">
      <h1 className="text_regis_page"> Register You Account Her </h1>
      <form>
        <div className="name_input_regis_page">
          <Input
            border="1px solid #000"
            className="Input_Register_page"
            backgroundColor="rgb(204, 237, 228)"
            width="200px"
            height="17px"
            placeholder="first Name"
            type="text"
          />
          <Input
            border="1px solid #000"
            className="Input_Register_page  margin_second_regis_page"
            backgroundColor="rgb(204, 237, 228)"
            width="200px"
            height="17px"
            placeholder="Second Name"
            type="text"
            margin="5px"
          />
        </div>
        <div className="input_padding">
          <Input
            border="1px solid #000"
            className="Input_Register_page "
            backgroundColor="rgb(204, 237, 228)"
            width="430px"
            height="17px"
            placeholder="your email"
            type="email"
            margin="10px"
          />
          <Input
            border="1px solid #000"
            className="Input_Register_page input_padding "
            backgroundColor="rgb(204, 237, 228)"
            width="430px"
            height="17px"
            placeholder="Password"
            type="password"
          />
          <Input
            border="1px solid #000"
            className="Input_Register_page "
            backgroundColor="rgb(204, 237, 228)"
            width="430px"
            height="17px"
            placeholder="Return Your Password"
            type="password"
            margin="10px"
          />
          <Input
            border="1px solid #000"
            className="Input_Register_page "
            backgroundColor="rgb(204, 237, 228)"
            width="430px"
            height="17px"
            placeholder="Phone Number"
            type="phoneNumber "
            margin="10px"
          />
        </div>
      </form>
      <Button type="submit" text="Submit" color="#CCEDE4" marginTop={"40px"} />
    </div>
  );
}
