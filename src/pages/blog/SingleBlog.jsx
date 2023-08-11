import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../../components/common/Meta";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getABlog } from "../../features/blogs/blogSlice";
import defaultImage from "../../images/defaultImage.png";
import DOMPurify from 'dompurify';
import "./styles/SingleBlog.css"
import Zoom from "react-medium-image-zoom";

const SingleBlog = () => {
  const blogState = useSelector((state) => state?.blog?.singleBlog?.data);

  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState();


  useEffect(() => {
    const getBlog = () => {
      dispatch(getABlog(getBlogId));
    };
    getBlog();
  }, [dispatch, getBlogId]);

  

  const sanitizedDescription = DOMPurify.sanitize(blogState?.description);
  
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/home" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">{blogState?.title}</h3>

              <div className="main-product-image-blog">
                <div>
                  <Zoom>
                    <img
                      src={
                        selectedImage ||
                        blogState?.images?.[0]?.url ||
                        defaultImage
                      }
                      alt=""
                      style={{ objectFit: "contain" }}
                    />
                  </Zoom>
                </div>
              </div>
              <div className="other-product-images-blog d-flex flex-wrap gap-10">
                {blogState?.images?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(item?.url)}
                    >
                      <img src={item?.url} alt="" className="img-product-blog" />
                    </div>
                  );
                })}
              </div>
              {/* <img
                src={imageSrc ? imageSrc : "images/blog-1.jpg"}
                className="img-single-blog"
                alt="blog"
              /> */}
              <p className="blog-content" dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
