import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import icon from "../../images/IconsQuestion02.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const Orden = () => {
  const userCartState = useSelector((state) => state?.auth?.cartProducts?.data);
  const [totalAmount, setTotalAmount] = useState(null);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index].quantity) * userCartState[index].price;
      setTotalAmount(sum);
    }
  }, [userCartState]);

  return (
    <div className="order-container">
      <h4>Orden Summary</h4>
      <div className="items-order ">
        <p>Subtotal </p>
        <div>
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
        </div>
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
      <Link to="/checkout" className="btn-link btn Primary-btn">
        Checkout
      </Link>
    </div>
  );
};

export default Orden;
