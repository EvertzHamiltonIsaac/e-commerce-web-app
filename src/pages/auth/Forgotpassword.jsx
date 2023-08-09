import BreadCrumb from "../../components/common/BreadCrumb";
import Meta from "../../components/common/Meta";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import CustomInput from "../../components/Custom/CustomInput";
import logo from "../../images/mmlogo.png";
import "./Styles/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../features/auth/authSlice";
import { useFormik } from "formik";
import * as yup from "yup";

const FieldSchema = yup.object({
  email: yup
    .string()
    .nullable()
    .email("Email Should be valid!")
    .required("Email is Required!"),
});

const Forgotpassword = () => {
  const dispatch = useDispatch();
  const {} = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: FieldSchema,
    onSubmit: (values) => {
      dispatch(forgotPassword({email: values.email}));
    },
  });

  return (
    <>
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <div className="d-flex justify-content-center my-2">
                <img src={logo} alt="logo" />
              </div>
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  name="email"
                  placeholder="Email"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="btn Primary-btn" type="submit">
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
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

export default Forgotpassword;
