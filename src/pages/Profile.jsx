import BreadCrumb from "../components/common/BreadCrumb";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import logo from "../images/mmlogo.png";

import { resetAuthState } from "../features/auth/authSlice";
import "./Profile.css";

const profileSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Email Should be valid!")
    .required("Email is Required!"),
  mobile: yup.string().required("Mobile number is Required!"),
});

const Profile = () => {
  const dispatch = useDispatch();
  const useState = useSelector((state) => state?.auth?.user?.data);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    dispatch(resetAuthState());
    window.location.reload();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: useState?.firstName,
      lastname: useState?.lastName,
      email: useState?.email,
      mobile: useState?.phone,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      /*dispatch(loginUser(values));
      navigate("/");*/
    },
  });
  return (
    <div>
      <BreadCrumb title="My Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
       <div className="d-flex justify-content-center">
       <div className="container-profile">
        <div className="d-flex justify-content-center my-2">
                    <img src={logo} alt="logo" />
                  </div>
          <div className="d-flex justify-content-center">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInput1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control size-u"
                  id="fistNameInput"
                  value={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInput1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control size-u"
                  id="lastNameInput"
                  value={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
              </div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control size-u"
                id="emailInput"
                aria-describedby="emailHelp"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
              />
              <div className="error">
                {formik.touched.email && formik.errors.email}
              </div>
              <label htmlFor="exampleInputPhone1" className="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                className="form-control size-u"
                id="mobileInput"
                aria-describedby="phoneHelp"
                value={formik.values.mobile}
                onChange={formik.handleChange("mobile")}
                onBlur={formik.handleBlur("mobile")}
              />
              <div className="error">
                {formik.touched.mobile && formik.errors.mobile}
              </div>
              
              <div className="button">
              <button type="submit" className="btn Primary-btn mar">
                Save
              </button>

              <button
              onClick={handleLogout}
              type="button"
              className="btn btn-danger"
            >
              Logout
            </button>
              </div>
            </form>
           
          </div>
        </div>
       </div>
      </Container>
    </div>
  );
};

export default Profile;
