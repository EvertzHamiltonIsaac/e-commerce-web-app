import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";

const BlogCard = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container xxl="true">
      <Carousel responsive={responsive}>
        <div className="Blog-card-items">
          <div className="blog-card">
            <div className="card-image">
              <img
                src="images/blog-1.jpg"
                className="img-fluid w-100"
                alt="blog"
              />
            </div>
            <div className="blog-content">
              <p className="date">1 Dec, 2022</p>
              <h5 className="title">A beautiful sunday morning renaissance</h5>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quaerat accusamus officia
              </p>
              <Link to="/blog/:id" className="btn btn-outline-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="Blog-card-items">
          <div className="blog-card">
            <div className="card-image">
              <img
                src="images/blog-1.jpg"
                className="img-fluid w-100"
                alt="blog"
              />
            </div>
            <div className="blog-content">
              <p className="date">1 Dec, 2022</p>
              <h5 className="title">A beautiful sunday morning renaissance</h5>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quaerat accusamus officia
              </p>
              <Link to="/blog/:id" className="btn btn-outline-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="Blog-card-items">
          <div className="blog-card">
            <div className="card-image">
              <img
                src="images/blog-1.jpg"
                className="img-fluid w-100"
                alt="blog"
              />
            </div>
            <div className="blog-content">
              <p className="date">1 Dec, 2022</p>
              <h5 className="title">A beautiful sunday morning renaissance</h5>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quaerat accusamus officia
              </p>
              <Link to="/blog/:id" className="btn btn-outline-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="Blog-card-items">
          <div className="blog-card">
            <div className="card-image">
              <img
                src="images/blog-1.jpg"
                className="img-fluid w-100"
                alt="blog"
              />
            </div>
            <div className="blog-content">
              <p className="date">1 Dec, 2022</p>
              <h5 className="title">A beautiful sunday morning renaissance</h5>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quaerat accusamus officia
              </p>
              <Link to="/blog/:id" className="btn btn-outline-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </Container>
  );
};

export default BlogCard;
