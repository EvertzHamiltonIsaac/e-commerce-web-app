import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, description, date, image } = props;
  const sanitizedDescription = DOMPurify.sanitize(description);
  const descriptionElement = document.createElement("div");
  descriptionElement.innerHTML = sanitizedDescription;
  const sanitizedDescriptionText = descriptionElement.textContent;

  const truncatedDescription =
    sanitizedDescriptionText.length > 20
      ? sanitizedDescriptionText.substring(0, 20) + "..."
      : sanitizedDescriptionText;
  return (
    <MDBCard className="card-padding">
      <MDBCardImage
        src={image}
        alt="..."
        position="top"
        className="img-blog-card"
      />
      <MDBCardBody>
        <MDBCardText>
          {" "}
          <small className="text-muted">{date}</small>
        </MDBCardText>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>{truncatedDescription}</MDBCardText>
        <Link to={"/blog/" + id} className="btn Primary-btn">
          Read More
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
};

BlogCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
};

export default BlogCard;
