import React from "react";
import { Formik, Form } from "formik";
import { FormInput } from "../Form/FormInputs";
import { validationCreateProductsSchema as validationSchema } from "../../utils/validationSchema";
import Button from "../../commons/Button";
import "./style.css";

const AdminCreateProduct = ({ handleCreateProductsSubmit }) => {
  return (
    <div className="full_Page">
      <Formik
        initialValues={{
          name: "",
          desc: "",
          price: "",
          image: "",
          cal: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleCreateProductsSubmit}
      >
        {({ isValid, dirty}) => (
          <Form className="form_product_admin_page">
            <FormInput name="name" placeholder="Name" />
            <FormInput name="desc" placeholder="Desc" />
            <FormInput name="price" placeholder="Price" />
            <FormInput name="image" placeholder="Image" />
            <FormInput name="cal" placeholder="Cal" />
            <Button
              text="Create"
              type="submit"
              disabled={!dirty || !isValid }
              margin={30}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminCreateProduct;
