import React from "react";
import { Formik, Form } from "formik";
import { validationEditUserInfoAuthSchema as validationSchema } from "../../utils/validationSchema";
import { FormInput } from "../Form/FormInputs";
import Button from "../../commons/Button";
import { Icon } from "../../assets/FolderIcon";
import "./style.css";

export function UserAuthInfoFormEdit({ handleEditUserInfoAuthSubmit }) {
  const { EmailIcon } = Icon;
  return (
    <div>
      <Formik
        initialStatus={{ name: "" }}
        validationSchema={validationSchema}
        onSubmit={handleEditUserInfoAuthSubmit}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="full_page">
            <FormInput
              name="email"
              placeholder="Email"
              Icon={() => <EmailIcon style={{ color: "#C9810E" }} />}
            />
            <FormInput
              name="name"
              placeholder="Name"
              Icon={() => Icon.DriveFileRenameOutlineIcon}
            />
            <Button
              text="Edit"
              type="submit"
              margin={30}
              disabled={!dirty || isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
