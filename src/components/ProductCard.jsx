import  { useRef, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import {  Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import DOMPurify from "dompurify";
import defaultImage from "../images/defaultImage.png"

const ProductCard = (props) => {
  const { grid, data } = props;
  //console.log(data);
  let location = useLocation();
  const dispatch = useDispatch();
  const descriptionRef = useRef([]);

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  useEffect(() => {
    data?.forEach((item, index) => {
      const sanitizedDescription = DOMPurify.sanitize(item.description);
      if (descriptionRef.current[index]) {
        descriptionRef.current[index].innerHTML = sanitizedDescription;
      }
    });
  }, [data]);

  return (
    <>
      {data?.map((item, index) => {
        const imageSrc = item.images[0]?.url || defaultImage;
        return (
          
          <div
            key={index}
            className={` ${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            } `}
          >
            <div className="product-card position-relative" >
              <div className="wishlist-icon position-absolute">
                <button
                  className="border-0 bg-transparent"
                  onClick={() => addToWish(item?._id)}
                >
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image d-flex justify-content-center align-items-center">
                <img
                  src={imageSrc}
                  className="mx-auto "
                  alt="product image"
                  width={269}
                  height={269}
                />
                <img
                  src={watch2}
                  className="mx-auto"
                  alt="product image"
                  width={269}
                  height={269}
                />
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={parseFloat(item?.totalrating)}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  ref={(el) => (descriptionRef.current[index] = el)}
                ></p>
                <p className="price">$ {item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare" />
                  </button>
                  <Link to={'/product/'+ item?._id} className="border-0 bg-transparent">
                    <img  src={view} alt="view" />
                  </Link>
                  <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

ProductCard.propTypes = {
  grid: PropTypes.number,
  data: PropTypes.array,
};

export default ProductCard;
