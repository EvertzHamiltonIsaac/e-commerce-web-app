import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';
// import { base_url, config } from "../../utils/axiosConfig";



const shippingSchema = yup.object({
  fristName: yup.string().required("First Name is Required!"),
  lastname: yup.string().required("Last Name is Required!"),
  address: yup.string().required("Address Details is Required!"),
  state: yup.string().required("State is Required!"),
  city: yup.string().required("City is Required!"),
  country: yup.string().required("Contry is Required!"),
  pincode: yup.string().required("Pincode is Required!"),
});

const Country = ["Dominican Republic"];
const stateRD = [
  "Azua",
  "Bahoruco",
  "Barahona",
  "Dajabón",
  "Distrito Nacional",
  "Duarte",
  "Elías Piña",
  "El Seibo",
  "Espaillat",
  "Hato Mayor",
  "Hermanas Mirabal",
  "Independencia",
  "La Altagracia",
  "La Romana",
  "La Vega",
  "María Trinidad Sánchez",
  "Monseñor Nouel",
  "Monte Cristi",
  "Monte Plata",
  "Pedernales",
  "Peravia",
  "Puerto Plata",
  "Samaná",
  "San Cristóbal",
  "San José de Ocoa",
  "San Juan",
  "San Pedro de Macorís",
  "Sánchez Ramírez",
  "Santiago",
  "Santiago Rodríguez",
  "Santo Domingo",
];

const Checkout = () => {
  const CartState = useSelector((state) => state?.auth?.cartProducts?.data);

  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < CartState?.length; index++) {
      sum = sum + Number(CartState[index].quantity) * CartState[index].price;
      setTotalAmount(sum);
    }
  }, [CartState]);

  const Shipping = totalAmount * 0.01 * 2.5;
  const tax = totalAmount * 0.2;
  const TotalOrder = totalAmount + Shipping + tax;

  const [shippingInfo, setShippingInfo] = useState(null);
  const formik = useFormik({
    initialValues: {
      fristName: "",
      lastname: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      // dispatch(loginUser(values));
      setShippingInfo(values)
    },
  });

  const sendShippingDetails = async (shippingInfo) => {
    try {
      const response = await axios.post(``, shippingInfo);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const checkOutHandler = async () => {
    try {
      const response = await sendShippingDetails(shippingInfo);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Dev Corner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">Ginger (monud0232@gmail.com)</p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100 my-2">
                  <select
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    {Country.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1 my-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="fristName"
                    value={formik.values.fristName}
                    onChange={formik.handleChange("fristName")}
                    onBlur={formik.handleBlur("fristName")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.fristName && formik.errors.fristName}
                  </div>
                </div>

                <div className="flex-grow-1 my-2 ms-5">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>
                <div className="w-100 my-2">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100 my-2">
                  <input
                    type="text"
                    placeholder="Apartment, Suite ,etc"
                    className="form-control"
                    name="other"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.other && formik.errors.other}
                  </div>
                </div>
                <div className="flex-grow-1 my-2">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1 my-2 ms-2">
                  <select
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Select State
                    </option>
                    {stateRD.map((staterd, index) => (
                      <option key={index} value={staterd}>
                        {staterd}
                      </option>
                    ))}
                  </select>
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.state && formik.errors.state
                    }
                    </div>
                </div>
                <div className="flex-grow-1 my-2 ms-2">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                    name="pincode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                  />
                   <div className="error ms-2 my-1">
                    {
                      formik.touched.city && formik.errors.city
                    }
                    </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="btn Primary-btn">
                      Continue to Shipping
                    </Link>
                    <button onClick={checkOutHandler}  className="btn Primary-btn" type="submit">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {CartState &&
                CartState?.map((item, index) => {
                  const subtotalprice = item?.price * item?.quantity;
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 mb-4 align-align-items-center"
                    >
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge color text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            className="checkout-img"
                            src={item?.productId?.images?.[0]?.url}
                            alt="product"
                          />
                        </div>
                        {" "}
                        <div>
                          <h5 className="total-price">
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">{item?.color?.name}</p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">
                          ${" "}
                          {subtotalprice.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </h5>
                      </div>
                    </div>
                  );
                })}
              {/* <div className="d-flex gap-10 mb-2 align-align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">gfdhgf</h5>
                    <p className="total-price">s / #agfgfd</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 100</h5>
                </div>
              </div> */}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Subtotal</p>
                <p className="mb-0 total-price">
                  {totalAmount !== null && (
                    <div>
                      {" "}
                      <span>
                        ${" "}
                        {totalAmount.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>{" "}
                      &nbsp;
                    </div>
                  )}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping estimate</p>
                <p className="mb-0 total-price">
                  ${" "}
                  {Shipping.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Tax estimate</p>
                <p className="mb-0 total-price">
                  ${" "}
                  {tax.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">
                ${" "}
                {TotalOrder.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
