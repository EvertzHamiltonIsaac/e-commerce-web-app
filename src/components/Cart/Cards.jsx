import  { useState } from "react";
import "../styles/Cart.css";
import famouswrapper04 from "../../images/famouswrapper04.png";
import CheckBox from "react-animated-checkbox";
import CloseButton from 'react-bootstrap/CloseButton';

const Cards = () => {
  const [checked, setChecked] = useState();
  const [stockStatus, setStockStatus] = useState("Out of Stock");

  const handleCheckboxClick = () => {
    setChecked((prevState) => !prevState);
    setStockStatus(checked ?  "In Stock":"Out of Stock" );
  };

  return (
    <div className="container-cart">
      <div className="container-cards">
        <div className="img-container">
          <img src={famouswrapper04} alt="Product" />
        </div>

      <div className="d-flex">
      <div className="func-container">
          <div className="func-class">
            <h4>Samsung Galaxy Note10+ Mobile Phone</h4>
            <div className="clasify d-flex text-secondary">
              <p>8 Colores</p>
              <div className="vl"></div>
              <p>Medium</p>
            </div>
            <p className="price">
              <span className="red-p">$100</span> &nbsp;
            </p>
            <div className="d-flex">
              <CheckBox
                checked={checked}
                checkBoxStyle={{
                  checkedColor: "#34b93d",
                  size: 20,
                  unCheckedColor: "#b8b8b8",
                }}
                duration={200}
                onClick={handleCheckboxClick}
                disabled={true} 
              />
              <p className="mx-3">{stockStatus}</p>
            </div>
          </div>
        </div>
        <input className="card-input" type="number" min={1}/>
        <div data-bs-theme="dark" >
      <CloseButton />
    </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;
