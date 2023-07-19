import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import Services from "../components/Home/Services";
import Meta from "../components/common/Meta";
import CarouselSlider from "../components/Home/CarouselSlider";
import ItemCategories from "../components/Home/ItemCategories";
import FamousWrapper from "../components/Home/FamousWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
import defaultImage from "../images/defaultImage.png";
import { getAllProducts } from "../features/products/productSlice";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blogs?.data);
  const productState = useSelector((state) => state?.product?.product?.data);
  // console.log(productState);

  const dispatch = useDispatch();

  useEffect(() => {
    getBlogs();
    getProducts();
  });
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  const getProducts = () => {
    dispatch(getAllProducts());
  };

  return (
    <>
      <Meta title={"Home"} />
      <CarouselSlider />
      <Container class1="home-wrapper-2">
        <Services />
      </Container>
      <Container class1="home-wrapper-2">
        <ItemCategories />
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="home-wrapper-2">
        <div className="container-wrapper-famous">
          <FamousWrapper />
          <FamousWrapper />
          <FamousWrapper />
          <FamousWrapper />
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="special-Product">
          {productState?.map((item, index) => {
            if (item?.tags === "special") {
              return (
                <SpecialProduct
                  key={index}
                  brand={item?.brand}
                  title={item?.title}
                  totalrating={item?.totalrating.toString()}
                  price={item?.price}
                  sold={item?.sold}
                  quantity={item?.quantity}
                />
              );
            }
          })}
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {productState?.map((item, index) => {
            const imageSrc = item.images[0]?.url || defaultImage;
            if (item?.tags === "popular") {
              return (
                <div
                  key={index}
                >
                  <Link
                    /*to={`${
                location.pathname == "/"
                  ? "/product/:id"
                  : location.pathname == "/product/:id"
                  ? "/product/:id"
                  : ":id"
              }`}*/
                    className="product-card position-relative"
                  >
                    <div className="wishlist-icon position-absolute">
                      <button className="border-0 bg-transparent" >
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
                      <p className="price">$ {item?.price}</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className="d-flex flex-column gap-15">
                        <button className="border-0 bg-transparent">
                          <img src={prodcompare} alt="compare" />
                        </button>
                        <button className="border-0 bg-transparent">
                          <img src={view} alt="view" />
                        </button>
                        <button className="border-0 bg-transparent">
                          <img src={addcart} alt="addcart" />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState?.map((item, index) => {
            if (index < 4) {
              const imageSrc = item?.images[0]?.url || defaultImage;
              return (
                <div className="col-3" key={index}>
                  <BlogCard
                    id={item?._id}
                    title={item?.title}
                    description={item?.description}
                    image={imageSrc}
                    date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm")}
                  />
                </div>
              );
            }
          })}
        </div>
      </Container> 
    </>
  );
};

export default Home;
