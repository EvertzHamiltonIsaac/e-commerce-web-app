import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, description, date, image } = props;
  return (
    <div className="Blog-card-items">
      <div className="blog-card">
        <div className="card-image">
          <img
            src={image ? image : "images/blog-1.jpg"}
            className="img-fluid w-100"
            alt="blog"
          />
        </div>
        <div className="blog-content">
          <p className="date">{date}</p>
          <h5 className="title">{title}</h5>
          <p className="desc">{description}</p>
          <Link to={"/blog/" + id} className="btn Primary-btn">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
