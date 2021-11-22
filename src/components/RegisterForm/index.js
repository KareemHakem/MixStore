import React from "react";
import { Formik, Form } from "formik";
import { FormInput } from "../Form/FormInputs";
import { validationRegisterSchema as validationSchema } from "../../utils/validationSchema";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "../../commons/Button";
import "./style.css";

const RegisterForm = ({ handleRegisterSubmit }) => {
  return (
    <div className="full_screen">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegisterSubmit}
      >
        {({ dirty, isValid }) => (
          <Form className="register_form_page">
            <FormInput
              name="firstName"
              placeholder="First Name"
              Icon={() => <DriveFileRenameOutlineIcon />}
            />
            <FormInput
              name="lastName"
              placeholder="Last Name"
              Icon={() => <DriveFileRenameOutlineIcon />}
            />
            <FormInput
              name="email"
              placeholder="Email"
              Icon={() => <EmailIcon />}
            />
            <FormInput
              name="password"
              placeholder="Password"
              Icon={() => <VisibilityIcon />}
            />
            <FormInput
              name="confirmPassword"
              placeholder="Confirm Password"
              Icon={() => <VisibilityIcon />}
            />
            <Button
              text="Register"
              type="submit"
              disabled={!dirty || !isValid}
              margin={30}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;

// <img  className="img_regis_page_flex" src="https://www.loveandoliveoil.com/wp-content/uploads/2019/03/fruit-shrub-mocktail-6.jpg" alt="img" />
