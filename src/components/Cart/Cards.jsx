import { useEffect, useState } from "react";
import "./styles/Cart.css";
import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import defaultImage from "../../images/defaultImage.png";
import {
  getCart,
  removeProductFromCart,
  updateProductFromCart,
} from "../../features/cart/cartSlice";

const Cards = () => {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state?.cart?.cartGetted?.data);
  // const [isDeleting, setIsDeleting] = useState(false);
  const [productUpdateDetails, setProductUpdateDetails] = useState({
    newQuantity: 0,
    id: "",
  });

  const handleDeleteProduct = async (id) => {
    dispatch(removeProductFromCart(id)).then(() => {
      dispatch(getCart());
    });
  };

  const handleUpdateProductQuantity = async (e, item) => {
    setProductUpdateDetails({ newQuantity: +e.target.value, id: item?._id });
    dispatch(
      updateProductFromCart({
        newQuantity: +e.target.value,
        cartItemId: item?._id,
      })
    ).then(() => {
      dispatch(getCart());
    });
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="container-cart">
      {userCartState &&
        userCartState?.map((item, index) => {
          if (item && item.productId && item.productId.title) {
            const imageUrl = item?.productId?.images?.[0]?.url || defaultImage;
            const totalPriceForProducts = item?.price * item?.quantity;
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
                        <div className="d-flex gap-2">
                          {" "}
                          Color:
                          <ul className="colors ps-0">
                            <li style={{ background: item?.color?.code }}></li>
                          </ul>
                        </div>
                        <div className="vl"></div>
                        <p>{item?.productId?.brand}</p>
                      </div>
                      <p className="price">
                        <span className="red-p">
                          ${" "}
                          {item?.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>{" "}
                        &nbsp;
                      </p>
                      <p className="text-secondary">
                        Subtotal:
                        <span className="red-p">
                          {" "}
                          ${" "}
                          {totalPriceForProducts.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </p>
                      <div className="d-flex"></div>
                    </div>
                  </div>
                  <input
                    className="card-input"
                    type="number"
                    min={1}
                    value={
                      productUpdateDetails?.newQuantity
                        ? productUpdateDetails?.newQuantity
                        : item?.quantity
                    }
                    onChange={(e) => handleUpdateProductQuantity(e, item)}
                  />
                  <div data-bs-theme="dark">
                    <CloseButton
                      onClick={() => handleDeleteProduct(item?._id)}
                    />
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
