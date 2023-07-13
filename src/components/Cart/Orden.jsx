import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import icon from "../../images/IconsQuestion02.png";

const Orden = () => {
  return (
    <div className="order-container">
      <h4>Orden Summary</h4>
      <div className="items-order ">
        <p>Subtotal </p>
        <p>
          <span>$100</span> &nbsp;
        </p>
      </div>
      <div className="items-order  ">
        <div className="d-flex align-items-center">
        <p>Shipping estimate</p>

        <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>
            }
          >
            {({ ref, ...triggerHandler }) => (
              <Button
                variant="dark"
                {...triggerHandler}
                className="d-flex justify-content-center align-items-center btn-overlay"
              >
                <Image ref={ref} roundedCircle src={icon} />
              </Button>
            )}
          </OverlayTrigger>
        </div>
        <p>
          <span>$100</span> &nbsp;
        </p>
      </div>
      <div className="items-order  ">
        <div className="d-flex align-items-center">
          <p>Tax estimate</p>
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>
            }
          >
            {({ ref, ...triggerHandler }) => (
              <Button
                variant="dark"
                {...triggerHandler}
                className="d-flex justify-content-center align-items-center btn-overlay"
              >
                <Image ref={ref} roundedCircle src={icon} />
              </Button>
            )}
          </OverlayTrigger>
        </div>
        <p>
          <span>$ 100</span> &nbsp;
        </p>
      </div>
      <div className="order-total">
        <h5>Order Total</h5>
        <p className="price">
          <span>$ 2040.0</span> &nbsp;
        </p>
      </div>
      <Link to="/" className="btn-link btn Primary-btn">
        Read More
      </Link>
    </div>
  );
};

export default Orden;
