import "./styles/Orders.css";
import BreadCrumb from "../../components/common/BreadCrumb";
import Meta from "../../components/common/Meta";
import prueba from "../../images/catbanner-01.jpg"
const Orders = () => {
  return (
    <div>
      <Meta title={"My Orders"} />
      <BreadCrumb title="My Orders" />
      <div  className="body">
        <main className="table-contaniner">
        <section className="table-header">
          <h3>My Orders</h3>
        </section>
        <section className="table-body">
          <table>
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
                <td>Order Id</td>
                <td>Total Amount</td>
                <td>Total Amount after Discount</td>
                <td>Status</td>
              </tr>
              <tr>
                <td> Product name</td>
                <td>Queanty</td>
                <td>Price</td>
                <td>Color</td>
              </tr>
              <tr>
                <td><img src={prueba} /> Product name</td>
                <td>Queanty</td>
                <td>Price</td>
                <td>Color</td>
              </tr>
            </tbody>
            
          </table>
        </section>
        </main>
      </div>
    </div>
  );
};

export default Orders;
