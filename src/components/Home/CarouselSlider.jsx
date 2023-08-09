import Container from "react-bootstrap/Container";
import {sdata} from "../../utils/sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Categories from "./Categories"
import Button from 'react-bootstrap/Button';
import "./styles/CarouselSlider.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const CarouselSlider = () => {
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
      return <ul style={{ margin: "10px" }}>{dots}</ul>
    },
  }

  return (
    <Container xxl="true">
    <div className="d-flex justify-content-center align-item-center container-carousel">
    {!hideCategories && <Categories className={hideCategories ? 'fade-out-left' : ''} />}
    <section className='homeSlide contentWidth'>
    <div className='container px-3'>
    <Slider {...settings} >
        {sdata.map((value, index) => {
          return (
              <div key={index}>
              <div className='d_flex top'>
                <div>
                <h4>{value.brands}</h4>
                  <h1>{value.title}</h1>
                  <p>{value.price}</p>
                  <Button  onClick={() => navigate("/product")} className="button-slider"  variant="outline-secondary">Visit Collections</Button>{' '}
                </div>
                <div>
                  <img className="cover" src={value.cover} alt='' />
                </div>
              </div>
              </div>
          )
        })}
      </Slider>
        </div>
    </section>
    </div>
    
    </Container>
  );
};

export default CarouselSlider;

