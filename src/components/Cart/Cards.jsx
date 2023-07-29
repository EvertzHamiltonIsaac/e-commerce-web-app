import { useEffect, useState } from "react";
import "../styles/Cart.css";
import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../../features/user/userSlice";
import defaultImage from "../../images/defaultImage.png";

const Cards = () => {
  const dispatch = useDispatch();
  const userCartState = useSelector((state) => state?.auth?.cartProducts?.data);
  const [isDeleting, setIsDeleting] = useState(false);
  const [productUpdateDetails, setProductUpdateDetails] = useState({
    newQuantity: 0,
    id: "",
  });

  console.log(productUpdateDetails);
  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch, isDeleting]);

  /*useEffect(() => {
    dispatch(
      updateCartProduct({
        cartItemId: productUpdateDetails?.cartItemId,
        quantity: productUpdateDetails?.quantity,
      })
    ).then(() => {
      dispatch(getUserCart());
    });
  }, [dispatch, productUpdateDetails]);*/

  const handleDeleteProduct = async (id) => {
    try {
      setIsDeleting(true);
      await dispatch(deleteCartProduct(id));
      setIsDeleting(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleUpdateProductQuantity = async (e, item) => {
    setProductUpdateDetails({ newQuantity: +e.target.value, id: item?._id });
    dispatch(
      updateCartProduct({
        newQuantity: +e.target.value,
        cartItemId: item?._id,
      })
    ).then(() => {
      dispatch(getUserCart());
    });
  };

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
                        <span className="red-p">$ {item?.price}</span> &nbsp;
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
