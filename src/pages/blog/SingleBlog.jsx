import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Meta from "../../components/common/Meta";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getABlog } from "../../features/blogs/blogSlice";
import defaultImage from "../../images/defaultImage.png";
import DOMPurify from 'dompurify';
import "./styles/SingleBlog.css"

const SingleBlog = () => {
  const blogState = useSelector((state) => state?.blog?.singleBlog?.data);

  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    const getBlog = () => {
      dispatch(getABlog(getBlogId));
    };
    getBlog();
  }, [dispatch, getBlogId]);

  const sanitizedDescription = DOMPurify.sanitize(blogState?.description);
  const imageSrc = blogState?.images[0]?.url || defaultImage;
  
  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
              </Link>
              <h3 className="title">{blogState?.title}</h3>
              <img
                src={imageSrc ? imageSrc : "images/blog-1.jpg"}
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;