import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import "./styles/SpecialProduct.css";
import watch from "../../src/images/famouswrapper04.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const SpecialProduct = (props) => {
  const { title, brand, totalrating, price, sold, quantity } = props;
  const [countdown, setCountdown] = useState(() => {
    const savedCountdown = localStorage.getItem("countdown");
    return savedCountdown ? parseInt(savedCountdown, 10) : 864000;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown - 1;
        localStorage.setItem("countdown", newCountdown.toString());
        return newCountdown;
      });
    }, 1000);

    const resetCountdown = () => {
      setCountdown(864000);
      localStorage.setItem("countdown", "864000");
    };

    const resetInterval = setInterval(resetCountdown, 864000000);

    return () => {
      clearInterval(timer);
      clearInterval(resetInterval);
    };
  }, []);

  const days = Math.floor(countdown / (60 * 60 * 24));
  const hours = Math.floor((countdown % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  return (
    <>
      <Container xxl="true">
        <div className="container-card">
          <div className="sub-container-card">
            <div className="div-img">
              <img src={watch} className="img-card" alt="" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{brand}</h5>
              <h6 className="title">{title}</h6>
              <ReactStars
                count={5}
                size={24}
                value={parseFloat(totalrating)}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">${price}</span> &nbsp;
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>{days} days</b>
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-3 timer">
                    {hours}
                  </span>
                  :
                  <span className="badge rounded-circle p-3 timer">
                    {minutes}
                  </span>
                  :
                  <span className="badge rounded-circle p-3 timer">
                    {seconds}
                  </span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Products: {quantity}</p>
                <div className="">
                  <ProgressBar
                    style={{ width: (quantity / (quantity + sold)) * 100 + "%" }}
                    animated
                    now={(quantity / (quantity + sold)) * 100}
                    min={quantity}
                    max={sold + quantity}
                  />
                </div>
              </div>
              <Button className="button-special-product">Add to Cart</Button>{" "}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

SpecialProduct.propTypes = {
  title: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  totalrating: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired
};

export default SpecialProduct;
