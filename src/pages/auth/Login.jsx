import { Link } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";
import Meta from "../../components/common/Meta";
import Container from "../../components/Container";
import CustomInput from "../../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";
import logo from "../../images/mmlogo.png"



const loginSchema = yup.object({
  email: yup
    .string()
    .nullable()
    .email("Email Should be valid!")
    .required("Email is Required!"),
  password: yup.string().required("Password is Required!"),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper home-wrapper-2">
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
                  {formik.touched.email && formik.errors.email }
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
                  <Link to="/forgot-password" className="mx-1 btn-Forgot-pass">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="btn Primary-btn" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="btn signup-btn">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
