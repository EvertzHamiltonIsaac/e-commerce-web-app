import { useEffect } from "react";
import "../styles/Cart.css";
import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../features/user/userSlice";
import defaultImage from "../../images/defaultImage.png";

const Cards = () => {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state?.auth?.cartProducts?.data);

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  return (
    <div className="container-cart">
      {userCartState &&
        userCartState?.map((item, index) => {
          if (item && item.productId && item.productId.title) {
            const imageUrl = item?.productId?.images?.[0]?.url || defaultImage;
            return (
              <div key={index} className="container-cards">
                <div className="img-container">
                  <img src={imageUrl} alt="Product" />
                </div>

                <div className="d-flex">
                  <div className="func-container">
                    <div className="func-class">
                      <h4>{item?.productId.title}</h4>
                      <div className="clasify d-flex text-secondary">
                        <p className="d-flex gap-2">
                          {" "}
                          Color:
                          <ul className="colors ps-0">
                            <li style={{ background: item?.color?.code }}></li>
                          </ul>
                        </p>
                        <div className="vl"></div>
                        <p>{item?.productId?.brand}</p>
                      </div>
                      <p className="price">
                        <span className="red-p">$ {item?.price}</span> &nbsp;
                      </p>
                      <div className="d-flex"></div>
                    </div>
                  </div>
                  <input
                    className="card-input"
                    type="number"
                    min={1}
                    value={item?.quantity}
                  />
                  <div data-bs-theme="dark">
                    <CloseButton />
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
};

export default Cards;
