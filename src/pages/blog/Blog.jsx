import BreadCrumb from "../../components/common/BreadCrumb";
import Meta from "../../components/common/Meta";
import BlogCard from "../../components/Blogs/BlogCard";
import Container from "../../components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllBlogs } from "../../features/blogs/blogSlice";
import moment from "moment";
import defaultImage from "../../images/defaultImage.png";
import "./styles/Blog.css"

const Blog = () => {
  const blogState = useSelector((state) => state?.blog?.blogs?.data);

  const dispatch = useDispatch();

  useEffect(() => {
    const getBlogs = () => {
      dispatch(getAllBlogs());
    };
    getBlogs();
  }, [dispatch]);
  
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="content-container">
            <div className="col-3">
              <div className="blog-pages-card" >
                <h3 className="blog-pages-title">Find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="" style={{width: "100%"}}>
              <div className="container-blog">
                {blogState?.map((item, index) => {
                  const imageSrc = item.images[0]?.url || defaultImage;
                  return (
                    <div className="" key={index}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        description={item?.description}
                        image={imageSrc}
                        date={moment(item?.createdAt).format(
                          "MMMM Do YYYY, h:mm"
                        )}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
