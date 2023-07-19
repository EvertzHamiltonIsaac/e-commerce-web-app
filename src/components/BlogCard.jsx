import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DOMPurify from "dompurify";


const BlogCard = (props) => {
  
  const { id, title, description, date, image } = props;
  const sanitizedDescription = DOMPurify.sanitize(description);
  const descriptionElement = document.createElement('div');
  descriptionElement.innerHTML = sanitizedDescription;
  const sanitizedDescriptionText = descriptionElement.textContent;
 
  const truncatedDescription = sanitizedDescriptionText.length > 30
    ? sanitizedDescriptionText.substring(0, 30) + "..."
    : sanitizedDescriptionText;
  return (
    <div className="Blog-card-items">
      <div className="blog-card">
      <Card className="card">
      <Card.Img variant="top" src={image} className="img-blog"/>
      <Card.Body>
      <Card.Text>{date}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{truncatedDescription}</Card.Text>
        <Button href={"/blog/" + id} variant="outline-primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string

};


export default BlogCard;
