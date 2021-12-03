import React from "react";
import { Formik, Form } from "formik";
import { validationLoginSchema as validationSchema } from "../../utils/validationSchema";
import { FormInput } from "../../components/Form/FormInputs";
import { Icon } from "../../assets/FolderIcon";
import Button from "../../commons/Button";
import "./style.css";

const LoginForm = ({ handleLoginSubmit, loading }) => {
  return (
    <div className="full_screen">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLoginSubmit}
      >
        {({ dirty, isValid, isSubmitting }) => (
          <Form className="form_Login_page">
            <FormInput
              name="email"
              placeholder="Email"
              Icon={() => Icon.EmailIcon}
            />
            <FormInput
              name="password"
              placeholder="Password"
              Icon={() => Icon.VisibilityIcon}
            />
            <Button
              text="Login"
              type="submit"
              disabled={!dirty || !isValid || isSubmitting}
              margin={30}
              loading={loading}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

// src="https://bakerbynature.com/wp-content/uploads/2015/03/IMG_8342-2.jpg"
