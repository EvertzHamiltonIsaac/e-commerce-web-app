import { useNavigate, useParams } from "react-router";
import BreadCrumb from "../../components/common/BreadCrumb";
import Meta from "../../components/common/Meta";
import Container from "../../components/Container/Container";
import CustomInput from "../../components/Custom/CustomInput";
import "./Styles/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { resetPassword } from "../../features/auth/authSlice";

const Resetpassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useParams();

  const resetPasswordSchema = yup.object({
    password: yup.string().required("Password is Required!"),
    confirmPassword: yup.string().required("This Field Is Required!"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: (values) => {
      if (values.password === values.confirmPassword) {
        dispatch(
          resetPassword({ token: token, password: values.password })
        ).then(() => {
          navigate("/login");
        });
      }
    },
  });

  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                <CustomInput
                  type="Password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange("confirmPassword")}
                  onBlur={formik.handleBlur("confirmPassword")}
                  value={formik.values.confirmPassword}
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="btn Primary-btn">
                      Reset
                    </button>
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

export default Resetpassword;
