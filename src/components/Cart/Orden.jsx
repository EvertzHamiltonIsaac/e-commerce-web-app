import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Orden = () => {
  return (
    <Container>
      <div className="order-container">
        <h3>Orden Summary</h3>
        <div className="items-order ">
          <p>Subtotal</p>
          <p >
            <span >$100</span> &nbsp;
          </p>
        </div>
        <div className="items-order  ">
          <p>Subtotal</p>
          <p >
            <span >$100</span> &nbsp;
          </p>
        </div>
        <div className="items-order  ">
          <p>Subtotal</p>
          <p >
            <span >$100</span> &nbsp;
          </p>
        </div>
        <div className="order-total">
          <h5>Order Total</h5>
          <p >
            <span >$2040.0</span> &nbsp;
          </p>
        </div>
        <Link to="/" className="btn Primary-btn">
                Read More
              </Link>
      </div>
    </Container>
  );
};

export default Orden;
