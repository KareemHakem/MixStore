import React from "react";
import { Formik, Form } from "formik";
import { FormInput } from "../Form/FormInputs";
import { validationRegisterSchema as validationSchema } from "../../utils/validationSchema";
import { Icon } from "../../assets/FolderIcon";
import Button from "../../commons/Button";
import image from "../../assets/images/png_4.png";
import "./style.css";

const RegisterForm = ({ handleRegisterSubmit, loading }) => {
  return (
    <div className="full_page_register">
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
              Icon={() => Icon.DriveFileRenameOutlineIcon}
            />
            <FormInput
              name="lastName"
              placeholder="Last Name"
              Icon={() => Icon.DriveFileRenameOutlineIcon}
            />
            <FormInput
              name="email"
              placeholder="Email"
              Icon={() => <Icon.EmailIcon style={{ color: "#000" }} />}
            />
            <FormInput
              name="password"
              placeholder="Password"
              Icon={() => Icon.VisibilityIcon}
            />
            <FormInput
              name="confirmPassword"
              placeholder="Confirm Password"
              Icon={() => Icon.VisibilityIcon}
            />
            <Button
              text="Register"
              type="submit"
              disabled={!dirty || !isValid}
              margin={30}
              loading={loading}
            />
          </Form>
        )}
      </Formik>
      <div>
        <img className="register_img" src={image} alt="imageForJuice" />
      </div>
    </div>
  );
};

export default RegisterForm;

// <img  className="img_regis_page_flex" src="https://www.loveandoliveoil.com/wp-content/uploads/2019/03/fruit-shrub-mocktail-6.jpg" alt="img" />
