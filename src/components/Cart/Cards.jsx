import { useEffect, useState } from "react";
import "../styles/Cart.css";
import famouswrapper04 from "../../images/famouswrapper04.png";
import CheckBox from "react-animated-checkbox";
import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../features/user/userSlice";

const Cards = () => {
  const [checked, setChecked] = useState(false);
  const [stockStatus, setStockStatus] = useState("Out of Stock");

  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state?.auth?.cartProducts?.data);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const handleCheckboxClick = () => {
    setChecked((prevState) => !prevState);
    setStockStatus(checked ? "In Stock" : "Out of Stock");
  };

  return (
    <div className="container-cart">
      {userCartState &&
        userCartState?.map((item, index) => {
          return (
            <div key={index} className="container-cards">
              <div className="img-container">
                <img src={item?.productId.images[0]?.url} alt="Product" />
              </div>

              <div className="d-flex">
                <div className="func-container">
                  <div className="func-class">
                    <h4>{item?.productId.title}</h4>
                    <div className="clasify d-flex text-secondary">
                      <p className="d-flex gap-3">
                        Color:
                        <ul className="colors ps-0">
                          <li style={{ background: item?.color }}></li>
                        </ul>
                      </p>
                    </div>
                    <p className="price">
                      <span className="red-p">$ {item?.price}</span> &nbsp;
                    </p>
                    <div className="d-flex">
                      <CheckBox
                        checked={checked}
                        checkBoxStyle={{
                          checkedColor: "#34b93d",
                          size: 20,
                          unCheckedColor: "#b8b8b8",
                        }}
                        duration={200}
                        onClick={handleCheckboxClick}
                        disabled={true}
                      />
                      <p className="mx-3">{stockStatus}</p>
                    </div>
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
        })}
    </div>
  );
};

export default Cards;
