import React from "react";
import { Formik, Form } from "formik";
import { validationEditUserInfoSchema as validationSchema } from "../../utils/validationSchema";
import { FormInput } from "../Form/FormInputs";
import Button from "../../commons/Button";
import { Icon } from "../../assets/FolderIcon";
import "./style.css";

export function UserInfoFormEdit({ handleEditUserInfoSubmit }) {
  return (
    <div>
      <Formik
        initialValues={{
          CreditCardNumber: "",
          CreditCardExpiryNumber: "",
          phoneNumber: "",
          city: "",
          address: "",
          zipCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleEditUserInfoSubmit}
      >
        {({ isValid, isSubmitting, dirty }) => (
          <Form className="full_page">
            <FormInput
              name="CreditCardNumber"
              placeholder="Credit Card Number"
              Icon={() => Icon.CreditScoreIcon}
            />
            <FormInput
              name="CreditCardExpiryNumber"
              placeholder="Credit Card Expiry Number"
              Icon={() => Icon.CreditScoreIcon}
            />
            <FormInput
              name="phoneNumber"
              placeholder="Phone Number"
              Icon={() => Icon.PhoneIphoneIcon}
            />
            <FormInput
              name="city"
              placeholder="City"
              Icon={() => Icon.LocationCityIcon}
            />
            <FormInput
              name="address"
              placeholder="Address"
              Icon={() => Icon.HomeIcon}
            />
            <FormInput
              name="zipCode"
              placeholder="Zip Code"
              Icon={() => Icon.DialpadIcon}
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
