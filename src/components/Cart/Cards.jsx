import { Container } from "react-bootstrap";
import "../styles/Cart.css";
import famouswrapper04 from "../../images/famouswrapper04.png";

const Cards = () => {
  return (
    <Container>
      <div className="container-cart">
        <div className="container-cards">
          <div className="img-container">
            <img src={famouswrapper04} alt="Product" />
          </div>

          <div className="func-container">
            <div className="func-class">
              <h4>Samsung Galaxy Note10+ Mobile Phone</h4>
              <div>
                <p>8 Colores</p>
                <p>Medium</p>
              </div>
              <p className="price">
                <span className="red-p">$100</span> &nbsp;
              </p>
            </div>
          </div>
          <input className="card-input" type="number"></input>
        </div>
      </div>
    </Container>
  );
};

export default Cards;
