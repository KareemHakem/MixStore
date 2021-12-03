import React from "react";
import { Formik, Form } from "formik";
import { FormInput } from "../Form/FormInputs";
import { validationAddAddressUserSchema as validationSchema } from "../../utils/validationSchema";
import { Icon } from "../../assets/FolderIcon";
import Button from "../../commons/Button";
import "./style.css";

const AddAddressUser = ({ handleAddAddressSubmit }) => {
  return (
    <div className="full_page">
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          city: "",
          address: "",
          zipCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleAddAddressSubmit}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form className="AddAddressForm">
            <FormInput
              name="email"
              placeholder="Email"
              Icon={() => Icon.EmailIcon}
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
              text="Order"
              type="submit"
              margin={30}
              disabled={!dirty || !isValid || isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddAddressUser;
