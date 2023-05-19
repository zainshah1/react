import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const Signup = () => {
  const {
    handleSubmit,
    handleChange,
    handleReset,
    handleBlur,
    errors,
    touched,
    values,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(16, "Must be 16 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            id="inputEmail4"
          />
          <p style={{ color: "red" }}>
            {touched.name && errors.name ? errors.name : null}
          </p>
        </div>
        <div className="col-md-12">
          <label htmlFor="inputPassword4" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            id="inputPassword4"
          />
          <p style={{ color: "red" }}>
            {touched.email && errors.email ? errors.email : null}
          </p>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
            name="address"
            id="inputAddress"
            placeholder="1234 Main St"
          />
          <p style={{ color: "red" }}>
            {touched.address && errors.address ? errors.address : null}
          </p>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
        <div className="col-12">
          <button
            type="reset"
            onClick={handleReset}
            className="btn btn-primary"
          >
            Reset
          </button>
          <button
            type="click"
            onClick={handleChange}
            className="btn btn-primary"
          >
            Click me!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
