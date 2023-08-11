import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
// import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import BreadCrumb from "../../components/common/BreadCrumb";
import Meta from "../../components/common/Meta";
import ProductCard from "../../components/ProductCard/ProductCard";
import Color from "../../components/Color/Color";
import Container from "../../components/Container/Container";
import { addRating, getAProduct, getsAllProducts } from "../../features/products/productSlice";
import defaultImage from "../../images/defaultImage.png";
import "./SingleProduct.css";
import { addToCart, getCart } from "../../features/cart/cartSlice";

const SingleProduct = () => {
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector(
    (state) => state?.product?.singleProduct?.data
  );

  const productsState = useSelector((state) => state?.product?.getsAllProducts?.data);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [selectedColorName, setSelectedColorName] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const colorData = productState?.color || [];
  const isColorDataValid =
    colorData.length > 0 && colorData[0].name !== undefined;
  const availablity =
    productState?.quantity - productState?.sold === 0
      ? "Out of Stock"
      : "In Stock";

  const setColor = (colorId) => {
    setSelectedColorId(colorId);
    const selectedColor = productState?.color.find(
      (color) => color._id === colorId
    );
    setSelectedColorName(selectedColor ? selectedColor.name : "");
  };

  useEffect(() => {
    dispatch(getsAllProducts());
    dispatch(getAProduct(getProductId))
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setIsLoading(false);
      });
  }, [dispatch, getProductId]);

  const [orderedProduct] = useState(true);
  const selectedColor = colorData.find(
    (color) => color._id === selectedColorId
  );

  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const uploadCart = () => {
    if (selectedColorId === null) {
      toast.error("Please Choose a Color");
    } else if (productState?.quantity - productState?.sold === 0) {
      toast.error("Product is Out of Stock");
    } else {
      dispatch(
        addToCart({
          productId: productState?._id,
          images: productState?.images?.[0]?.url,
          quantity,
          color: selectedColor,
          price: productState?.price,
          brand: productState?.brand,
        })
      ).then(() => dispatch(getCart()));
      setAlreadyAdded(true);
    }
  };

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const [popularProduct, setPopularProduct] = useState([]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState?.length; index++) {
      const element = productsState[index];
      if (element.tags === "popular") {
        data.push(element);
      }
      setPopularProduct(data);
    }
  }, [productsState]);

  const [stars, setStars] = useState(null);
  const [comment, setComment] = useState(null);
  const addRatingToProduct = async () => {
    if (stars === null) {
      toast.error("Please add star rating");
      return false;
    } else if (comment === null) {
      toast.error("Please Write Review About the Product");
      return false;
    } else {
      dispatch(
        addRating({ stars: stars, productId: getProductId, comment: comment })
      );
      dispatch(getAProduct(getProductId));
      window.location.reload(false);
    }
    return false;
  };

  if (isLoading) {
    return (
      <div className="my-5">
        <div className="d-flex justify-content-center my-3">
          {" "}
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        <div className="d-flex justify-content-center ">
          <p>Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Meta title={productState?.title || "Product Name"} />
      <BreadCrumb title={productState?.title || "Product Name"} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        {productState && productState.images && (
          <div className="row">
            <div className="col-6 product-inline">
              <div className="main-product-image">
                <div>
                  <Zoom>
                    <img
                      src={
                        selectedImage ||
                        productState?.images?.[0]?.url ||
                        defaultImage
                      }
                      alt=""
                      style={{ objectFit: "contain" }}
                    />
                  </Zoom>
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-10">
                {productState?.images?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(item?.url)}
                    >
                      <img src={item?.url} alt="" className="img-product" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-6 product-inline">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{productState?.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">
                    ${" "}
                    {productState?.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={parseFloat(productState?.totalrating) || 5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">( {productState?.ratings?.length} Reviews )</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">{productState?.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">{productState?.category}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">{productState?.tags}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">{availablity}</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-1 mb-1">
                    <div className="d-flex gap-10 align-items-center my-1">
                      <h3 className="product-heading">Color: </h3>
                      <p className="product-data mx-2"> {selectedColorName} </p>
                    </div>
                    {isColorDataValid && (
                      <Color setColor={setColor} colorData={colorData} />
                    )}
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={0}
                        max={productState?.quantity - productState?.sold}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                      />
                    </div>

                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button
                        className="btn Primary-btn"
                        type="button"
                        onClick={() => {
                          if (alreadyAdded) {
                            window.location.href = "/cart";
                          } else {
                            uploadCart();
                          }
                        }}
                      >
                        {alreadyAdded ? "Go to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    {/* <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" /> Add to Compare
                      </a>
                    </div> */}
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />{" "}
                      We ship all US domestic orders within{" "}
                      <b>5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link:</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard(
                          "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                        );
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p
                dangerouslySetInnerHTML={{ __html: productState?.description }}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={parseFloat(productState?.totalrating) || 5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">{`Based on ${productState?.ratings?.length} Reviews`}</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={null}
                    edit={true}
                    activeColor="#ffd700"
                    onChange={(e) => {
                      setStars(e);
                    }}
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    onClick={addRatingToProduct}
                    className="btn Primary-btn mt-3"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
              <div className="reviews mt-4">
                {productState &&
                  productState?.ratings.map((item, index) => {
                    return (
                      <div key={index} className="review">
                        <div className="d-flex gap-10 align-items-center">
                          <h6 className="mb-0">{`${item?.postedby?.firstName} ${item?.postedby?.lastName}`}</h6>
                          <ReactStars
                            count={5}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                            value={item?.stars}
                          />
                        </div>
                        <p className="mt-3">{item?.comment}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard data={popularProduct} />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
