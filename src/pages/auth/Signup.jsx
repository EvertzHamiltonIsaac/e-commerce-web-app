import Container from "../../components/Container/Container";
import CustomInput from "../../components/Custom/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/mmlogo.png";
import "./Styles/auth.css";
import { useNavigate } from "react-router";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

import { register, resetAuthState } from "../../features/auth/authSlice";
import React, { useEffect } from "react";

const signUpSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .nullable()
    .email("Email Should be valid")
    .required("Email is Required"),
  phone: yup.string().required("Mobile is Required"),
  address: yup.string().required("Address is Required"),
  postalCode: yup.string().required("Postal Code is Required"),
  password: yup.string().required("Password is Required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isLoading, isError, userRegistered } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  useEffect(() => {
    if (isSuccess && userRegistered) {
      dispatch(resetAuthState());
      navigate("/auth/login");
    }
  }, [isSuccess, userRegistered]);

  return (
    <React.Fragment>
      <Container className="login-wrapper py-5 home-wrapper-2 vh-100">
        <Link to="/" className="link-other">
          <HiOutlineArrowLeft className="fs-4" /> Go back to Home
        </Link>
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <div className="d-flex justify-content-center my-2">
                <img src={logo} alt="logo" />
              </div>
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column"
              >
                <CustomInput
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                />
                <div className="error">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
                <CustomInput
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                />
                <div className="error">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  autocomplete="phone"
                  required
                  enterkeyhint="next"
                  value={formik.values.phone}
                  onChange={formik.handleChange("phone")}
                  onBlur={formik.handleBlur("phone")}
                />
                <div className="error">
                  {formik.touched.phone && formik.errors.phone}
                </div>
                <CustomInput
                  type="text"
                  name="address"
                  placeholder="Address"
                  autocomplete="address"
                  required
                  enterkeyhint="next"
                  value={formik.values.address}
                  onChange={formik.handleChange("address")}
                  onBlur={formik.handleBlur("address")}
                />
                <div className="error">
                  {formik.touched.address && formik.errors.address}
                </div>
                <CustomInput
                  type="tel"
                  name="postalCode"
                  placeholder="Postal Code"
                  autocomplete="postalCode"
                  enterkeyhint="done"
                  required
                  value={formik.values.postalCode}
                  onChange={formik.handleChange("postalCode")}
                  onBlur={formik.handleBlur("postalCode")}
                />
                <div className="error">
                  {formik.touched.postalCode && formik.errors.postalCode}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="btn Primary-btn">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Signup;
