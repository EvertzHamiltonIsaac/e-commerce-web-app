import Container from "react-bootstrap/Container";
import { services } from "../../utils/Data";
import "../css components/services.css"


const Services = () => {
    return (
      <Container xxl="true" >
      <div className="service-container">
      {services?.map((value, index) => {
                return (
                  <div className="items d-flex align-items-center justify-content-center gap-15" key={index}>
                    <img src={value.image} alt="services" />
                    <div>
                      <h6>{value.title}</h6>
                      <p className="mb-0">{value.tagline}</p>
                    </div>
                  </div>
                );
              })}
      </div>
      </Container>
    );
  };
  
  export default Services;