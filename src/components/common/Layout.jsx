// import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Layaout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts?.data);
  const subTotalGlobalState = useSelector((state) => state.subTotal);
  // const [subtotal, setTotal] = useState(null);
  // console.log(subTotalGlobalState);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
    }
    dispatch({ type: "SET_SUBTOTAL", payload: sum });
  }, [dispatch, cartState]);

  return (
    <>
      <Header
        CartSubTotal={subTotalGlobalState}
        cartState={cartState?.length}
      />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layaout;
