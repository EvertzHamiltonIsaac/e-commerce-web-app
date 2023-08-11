import Container from "react-bootstrap/Container";
// import {sdata} from "../../utils/sdata"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categories from "./Categories";
import Button from "react-bootstrap/Button";
import "./styles/CarouselSlider.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getsAllProducts } from "../../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";

const CarouselSlider = () => {
  const productsState = useSelector(
    (state) => state?.product?.getsAllProducts?.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getsAllProducts());
  }, [dispatch]);

  const navigate = useNavigate();

  const [hideCategories, setHideCategories] = useState(false);
  useEffect(() => {
    const handleWindowResize = () => {
      const maxWidth = 1399;
      const shouldHide = window.innerWidth <= maxWidth;
      setHideCategories(shouldHide);
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Llamar a la función al cargar la página

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "10px" }}>{dots}</ul>;
    },
  };

  return (
    <Container xxl="true">
      <div className="d-flex justify-content-center align-item-center container-carousel">
        {!hideCategories && (
          <Categories className={hideCategories ? "fade-out-left" : ""} />
        )}
        <section className="homeSlide contentWidth">
          <div className="container px-3">
            <Slider {...settings}>
              {productsState
                ?.filter((item) => item?.tags === "popular")
                .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
                .slice(0, 4)
                .map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="d_flex top mx-2">
                        <div>
                          <h4>{item?.brand}</h4>
                          <h1>{item?.title}</h1>
                          <p> $ {item?.price}</p>
                          <Button
                            onClick={() => navigate("/product")}
                            className="btn Primary-btn color"
                          >
                            Go To Our Store
                          </Button>{" "}
                        </div>
                        <div>
                          <img
                            className="cover"
                            src={item?.images?.[0]?.url}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default CarouselSlider;
