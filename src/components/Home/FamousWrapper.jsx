import Container from "react-bootstrap/Container";
import "../css components/FamousWrapper.css";
import famouswrapper01 from "../../images/famouswrapper01.png";
import famouswrapper02 from "../../images/famouswrapper02.png";
import famouswrapper03 from "../../images/famouswrapper03.png";
import famouswrapper04 from "../../images/famouswrapper04.png";



const FamousWrapper = () => {
  return (
    <Container xxl="true">
      <div className="famous-wrapper">
        <div className="flip-card-container" style={{ "--hue": 220 }}>
          <div className="flip-card">
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                <img src={famouswrapper01} alt="famouswrapper" />
                <figcaption>Apple Watch Series 8.</figcaption>
              </figure>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                iste sequi asperiores? 
              </p>
            </div>

            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                <img src={famouswrapper01} alt="famouswrapper" />
              </figure>

              <button>More</button>

              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card-container" style={{ "--hue": 220 }}>
          <div className="flip-card">
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                <img
                  src={famouswrapper02}
                  alt="Image 2"
                />
                <figcaption>Apple Watch SE.</figcaption>
              </figure>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                iste sequi asperiores? 
              </p>
            </div>

            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                <img
                  src={famouswrapper02}
                  alt="image-2"
                />
              </figure>

              <button>More</button>

              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card-container" style={{ "--hue": 150 }}>
          <div className="flip-card">
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                <img
                  src={famouswrapper03}
                  alt="famouswrapper"
                />
                <figcaption>Apple MacBook Pro.</figcaption>
              </figure>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                iste sequi asperiores? 
              </p>
            </div>

            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                <img
                  src={famouswrapper03}
                  alt="famouswrapper"
                />
              </figure>

              <button>More</button>

              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card-container" style={{ "--hue": 220 }}>
          <div className="flip-card">
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                <img
                  src={famouswrapper04}
                  alt="famouswrapper"
                />
                <figcaption>Apple Ipad Pro.</figcaption>
              </figure>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                iste sequi asperiores? 
              </p>
            </div>

            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                <img
                  src={famouswrapper04}
                  alt="famouswrapper"
                />
              </figure>

              <button>More</button>
              
              <div className="design-container">
                <span className="design design--1"></span>
                <span className="design design--2"></span>
                <span className="design design--3"></span>
                <span className="design design--4"></span>
                <span className="design design--5"></span>
                <span className="design design--6"></span>
                <span className="design design--7"></span>
                <span className="design design--8"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FamousWrapper;
