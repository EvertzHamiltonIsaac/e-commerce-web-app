import BreadCrumb from "../components/common/BreadCrumb";
import Meta from "../components/common/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import logo from "../images/mmlogo.png"


const signUpSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup.string().nullable().email("Email Should be valid").required("Email is Required"),
  phone: yup.string().required("Mobile No is Required"),
  address: yup.string().required("Address No is Required"),
  postalCode: yup.string().required("Postal Code No is Required"),
  password: yup.string().required("Password is Required"),

});

const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone:"",
      address:"",
      postalCode:"",
      password:"",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
            <div className="d-flex justify-content-center my-2">
            <img src={logo} alt="logo" />
            </div>
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column">
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
                <CustomInput type="email" name="email" placeholder="Email" value={formik.values.email}
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
                    <button className="btn Primary-btn">Sign Up</button>
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

export default Signup;
