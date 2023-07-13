import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import Cards from "../components/Cart/Cards";
import Orden from "../components/Cart/Orden";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
      <h3>Shopping Cart</h3>
       <div className="d-flex justify-content-between">
       <Cards/>
       <Orden/>
       </div>
      </Container>
    </>
  );
};

  export default Cart