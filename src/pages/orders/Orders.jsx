import "./styles/Orders.css";
import BreadCrumb from "../../components/common/BreadCrumb";
import Meta from "../../components/common/Meta";
// import prueba from "../../images/catbanner-01.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state.user?.getOrderedProduct?.data
  );

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <div>
      <Meta title={"My Orders"} />
      <BreadCrumb title="My Orders" />
      <div className="body">
        <main className="table-contaniner">
          <section className="table-header">
            <h1 className="mt-3">My Orders</h1>
          </section>
          <section className="table-body">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <table key={index}>
                    <thead>
                      <tr>
                        <th>Order Id</th>
                        <th>Total Amount</th>
                        <th>Total Amount after Discount</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>{item?._id}</td>
                        <td>{item?.totalPrice}</td>
                        <td>{item?.totalPriceAfterDiscount}</td>
                        <td>{item?.orderStatus}</td>
                      </tr>
                      <tr>
                        <td className="text-bold"> Product name</td>
                        <td className="text-bold">Quantity</td>
                        <td className="text-bold">Price</td>
                        <td className="text-bold">Color</td>
                      </tr>
                      {item?.orderItems?.map((i, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <img src={i?.product?.images?.[0].url} />{" "}
                              {i?.product.title}
                            </td>
                            <td>{i?.product.quantity}</td>
                            <td>{i?.product.price}</td>
                            <td>
                              <ul className="colors ps-0">
                                <li
                                  style={{
                                    background: i?.color?.code,
                                  }}
                                ></li>
                              </ul>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                );
              })}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Orders;
