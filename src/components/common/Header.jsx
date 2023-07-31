import { BsSearch } from "react-icons/bs";
import compare from "../../images/compare.svg";
import wishlist from "../../images/wishlist.svg";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";
import menu from "../../images/menu.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { useMemo } from "react";


const Header = () => {
  const cartItems = useSelector((state) => state.auth.cartProducts?.data || []);

  const { uniqueProductIds, subtotal } = useMemo(() => {
    const uniqueIds = {};
    let totalItems = 0;
    let subtotal = 0;

    cartItems.forEach(item => {
      if (!uniqueIds[item.productId._id]) {
        uniqueIds[item.productId._id] = true;
      }
      totalItems += item.quantity;
      subtotal += item.quantity * item.price;
    });

    return {
      uniqueProductIds: Object.keys(uniqueIds).length,
      totalItems,
      subtotal,
    };
  }, [cartItems]);
  
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav-bar-container ">
          <Container xxl="true">
            <Navbar.Brand href="/" className="logo">
              <img
                alt=""
                src="/logowhite.png"
                width="30"
                height="30"
                className="d-inline-block align-center mb-2"
              />
              {"  "}
              Ginger
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="navbar-toggle"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="logo logo-toggle"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  <img
                    alt=""
                    src="/logowhite.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-center mb-2"
                  />{" "}
                  {"  "}
                  Ginger
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <InputGroup className="InputGroup">
                  <Form.Control
                    placeholder="Search Product Here..."
                    aria-label="Search Product Here..."
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-light" id="button-addon2">
                    <BsSearch className="fs-6" />
                  </Button>
                </InputGroup>
                <Nav className="justify-content-star flex-grow-1 pe-3">
                  <Nav.Link
                    href="/compare-product"
                    className="nav-links d-flex justify-content-center links-active"
                  >
                    <img src={compare} alt="compare" className="links-img" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Nav.Link>
                  <Nav.Link
                    href="/wishlist"
                    className="nav-links d-flex justify-content-center links-active"
                  >
                    <img src={wishlist} alt="wishlist" className="links-img" />
                    Favourite <br /> Wishlist
                  </Nav.Link>
                  <Nav.Link
                    href="/login"
                    className="nav-links d-flex justify-content-center links-active"
                  >
                    <img src={user} alt="user" className="links-img" />
                    Log in /<br /> Account
                  </Nav.Link>
                  {cartItems.length > 0 ? (
                    <Nav.Link
                      href="/cart"
                      className="nav-links d-flex justify-content-center links-active"
                    >
                      <img src={cart} alt="cart" className="links-img" />
                      <div className="d-flex flex-column subtotal">
                        <p className="badge bg-white text-dark">
                          {uniqueProductIds}
                        </p>
                        <p className="mb-0 size-60">
                          ${" "}
                          {subtotal.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                    </Nav.Link>
                  ) : (
                    <Nav.Link
                      href="/cart"
                      className="nav-links d-flex justify-content-center links-active"
                    >
                      <img src={cart} alt="cart" className="links-img" />
                      <div className="d-flex flex-column gap-15">
                        <span className="badge bg-white text-dark">0</span>
                        <p className="mb-0 size-60">$ 0.00</p>
                      </div>
                    </Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <header className="container-fluid py-2">
        <div className="container-xxl">
          <ul className="nav nav-pills d-flex align-items-center">
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle
                  className="Dropdown-Toggle"
                  id="dropdown-basic"
                >
                  <img src={menu} alt="" className="mx-2" />
                  Shop Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Nav.Link className="nav-link text-white" href="/">
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="nav-link text-white" href="/product">
                Our Store
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="nav-link text-white" href="/blogs">
                Blogs
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="nav-link text-white " href="/contact">
                Contact
              </Nav.Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
