import React from "react";
import { Formik, Form } from "formik";
import { validationLoginSchema as validationSchema } from "../../utils/validationSchema";
import { FormInput } from "../../components/Form/FormInputs";
import { Icon } from "../../assets/FolderIcon";
import Button from "../../commons/Button";
import image from "../../assets/images/png3.png";
import "./style.css";

const LoginForm = ({ handleLoginSubmit, loading }) => {
  const { EmailIcon } = Icon;
  return (
    <div className="full_page_register">
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
              Icon={() => <EmailIcon style={{ color: "#C9810E" }} />}
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
      <div>
        <img className="login_img" src={image} alt="'imageForJuice" />
      </div>
    </div>
  );
};

export default LoginForm;
