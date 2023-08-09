import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  //MDBInputGroup,
 // MDBBtn,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Container } from "react-bootstrap";
//import newsletter from "../../images/newsletter.png";
import { Link } from "react-router-dom";
import "./Styles/Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Container xxl="true">
          <MDBFooter className="text-center text-lg-start text-muted">
            <MDBContainer className="p-4 pb-0 border-bottom">
              <form action="">
                <MDBRow className="d-flex justify-content-center">
                  {/* <MDBCol size="auto" className="mb-4 mb-md-2">
                    <p className="pt-2 text-white">
                      <img src={newsletter} alt="newsletter" className="mx-2" />
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </MDBCol> */}

                  {/* <MDBCol md="5" size="12" className="mb-4 mb-md-0">
                    <MDBInputGroup className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Your Email Address"
                        type="text"
                      />
                      <MDBBtn outline color="light">
                        Subscribe
                      </MDBBtn>
                    </MDBInputGroup>
                  </MDBCol> */}

                </MDBRow>
              </form>
            </MDBContainer>

            <section className="text-white">
              <MDBContainer className="text-center text-md-start mt-5">
                <MDBRow className="mt-3">
                  <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-3">
                      <img
                        alt=""
                        src="/logowhite.png"
                        width="20"
                        height="20"
                        className="d-inline-block align-center mx-2 mb-1"
                      />
                      Ginger Company
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </MDBCol>

                  <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Information</h6>
                    <p>
                      <a href="/privacy-policy" className="text-reset">
                        Privacy Policy
                      </a>
                    </p>
                    <p>
                      <a href="/refund-policy" className="text-reset">
                        Refund Policy
                      </a>
                    </p>
                    <p>
                      <a href="/shipping-policy" className="text-reset">
                        Shipping Policy
                      </a>
                    </p>
                    <p>
                      <a href="/term-conditions" className="text-reset">
                        Terms & Conditions
                      </a>
                    </p>
                  </MDBCol>

                  <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Pricing
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Settings
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Orders
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Help
                      </a>
                    </p>
                  </MDBCol>

                  <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <MDBIcon icon="home" className="me-2" />
                      Calle Barney Morgan # 265, Ensanche Luperon, Santo
                      Domingo <br />
                    </p>
                    <p>
                      <MDBIcon icon="envelope" className="me-2" />
                      <Link
                        className="link-footer"
                        to="gingerdevelopmentteam@gmail.com"
                      >
                        gingerteam@gmail.com
                      </Link>
                    </p>
                    <p>
                      <MDBIcon icon="phone" className="me-3" />
                      <Link className="link-footer"> +1 8299259762</Link>
                    </p>
                    <p>
                      <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div className="text-center p-4 text-white">
              &copy; {new Date().getFullYear()} Powered by Ginger Development
              Team
            </div>
          </MDBFooter>
        </Container>
      </div>
    </>
  );
};

export default Footer;
