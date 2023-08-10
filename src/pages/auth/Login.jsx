import { Link, useNavigate } from "react-router-dom";
//import BreadCrumb from "../../components/common/BreadCrumb";
//import Meta from "../../components/common/Meta";
import Container from "../../components/Container/Container";
import CustomInput from "../../components/Custom/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../images/mmlogo.png";
import { login, resetAuthState } from "../../features/auth/authSlice";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const loginSchema = yup.object({
  email: yup
    .string()
    .nullable()
    .email("Email Should be valid!")
    .required("Email is Required!"),
  password: yup.string().required("Password is Required!"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSuccess, isError, isLoading, userLogged, message } = useSelector(
    (state) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  useEffect(() => {
    if (isSuccess && userLogged) {
      navigate("/");
    }
  }, [isSuccess, userLogged]);

  useEffect(() => {
    if (typeof message === "string" && isError) {
      if (message.includes("invalid") || message.includes("credentials")) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${message}`,
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(resetAuthState());
            localStorage.clear();
          }
        });
      }
    }
  }, [isLoading, isError]);

  return (
    <React.Fragment>
      <div className="figure"> 
      
        <div>
          <div className="circule "></div>
          <div className="circule-01"></div>
        </div>
        <div className="figure-part"></div>
      </div>
      <Container class1="login-wrapper vh-100">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <div className="d-flex justify-content-center my-2">
                <img src={logo} alt="logo" />
              </div>
              <h3 className="text-center mb-3 login">Login</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column"
              >
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
                  <Link
                    to="/auth/forgot-password"
                    className="mx-1 btn-Forgot-pass"
                  >
                    Forgot Password?
                  </Link>

                  <div
                    style={{ flexDirection: "column" }}
                    className="mt-3 d-flex justify-content-center gap-15 align-items-center"
                  >
                    <button className="btn Primary-btn" type="submit">
                      Login
                    </button>
                    <Link to="/auth/signup" className="link">
                      Don't have an account?
                    </Link>
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

export default Login;
