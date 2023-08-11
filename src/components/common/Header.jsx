import { BsSearch } from "react-icons/bs";
import wishlist from "../../images/wishlist.svg";
import userIMG from "../../images/user.svg";
import cart from "../../images/cart.svg";
//import menu from "../../images/menu.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import InputGroup from "react-bootstrap/InputGroup";
//import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import "./Styles/Header.css";
import { getCart } from "../../features/cart/cartSlice";
import { useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useNavigate } from "react-router-dom";
import { getsAllProducts } from "../../features/products/productSlice";
import useUser from "../../hooks/useUser";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, sessionToken, message } = useUser();

  const authState = useSelector((state) => state?.auth);
  console.log(authState);
  const cartItems = useSelector((state) => state?.cart?.cartGetted?.data) || [];
  const productsState = useSelector((state) => state?.product?.getsAllProducts?.data);
  const [productOpt, setProductOpt] = useState([]);
  const [paginate, setPaginate] = useState(true);

  const { uniqueProductIds, subtotal } = useMemo(() => {
    const uniqueIds = {};
    let totalItems = 0;
    let subtotal = 0;

    cartItems.forEach((item) => {
      if (!uniqueIds[item?.productId?._id]) {
        uniqueIds[item?.productId?._id] = true;
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

  // const handleLogin = (route) => {
  //   if (sessionToken) {
  //     navigate(route)
  //   } else {
  //     navigate("/login");
  //   }
  // };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState?.length; index++) {
      const element = productsState[index];
      data.push({ id: index, prod: element?._id, name: element?.title });
    }
    setProductOpt(data);
  }, [productsState]);

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
                  <Typeahead
                    id="pagination-example"
                    onPaginate={() => console.log("Results paginated")}
                    options={productOpt}
                    paginate={paginate}
                    placeholder="Search Product Here..."
                    onChange={(selected) => {
                      navigate(`/product/${selected[0]?.prod}`);
                      dispatch(getsAllProducts(selected[0]?.prod));
                    }}
                    labelKey={"name"}
                    minLength={2}
                  />
                  <Button variant="outline-light" id="button-addon2">
                    <BsSearch className="fs-6" />
                  </Button>
                </InputGroup>
                <Nav className="justify-content-star flex-grow-1 pe-3">
                  {/* <Nav.Link
                    href="/compare-product"
                    className="nav-links d-flex justify-content-center links-active"
                  >
                    <img src={compare} alt="compare" className="links-img" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Nav.Link> */}

                  <Nav.Link
                    href={sessionToken === null ? "/auth/login" : "/wishlist"}
                    className="nav-links d-flex justify-content-center links-active"
                  >
                    <img src={wishlist} alt="wishlist" className="links-img" />
                    Favourite <br /> Wishlist
                  </Nav.Link>

                  {
                    <Nav.Link
                      href={sessionToken === null ? "/auth/login" : "/profile"}
                      className="nav-links d-flex justify-content-center links-active"
                    >
                      <img src={userIMG} alt="user" className="links-img" />
                      {sessionToken === null ? (
                        <p className="mb-0">
                          Log in /<br /> Account
                        </p>
                      ) : (
                        <p className="mb-0">
                          {user?.firstName} <br />
                          {user?.lastName}
                        </p>
                      )}
                    </Nav.Link>
                  }

                  {cartItems.length > 0 ? (
                    <Nav.Link
                    href={sessionToken === null ? "/auth/login" : "/cart"}

                      className="nav-links d-flex justify-content-center links-active"
                    >
                      <img src={cart} alt="cart" className="links-img" />
                      <div className="d-flex flex-column subtotal">
                        <p className="badge bg-white text-dark">
                          {uniqueProductIds}
                        </p>
                        <p className="mb-0 size-60">
                          ${" "}
                          {subtotal?.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                    </Nav.Link>
                  ) : (
                    <Nav.Link
                    href={sessionToken === null ? "/auth/login" : "/cart"}
                      className="nav-links d-flex justify-content-center links-active"
                    >
                      <img src={cart} alt="cart" className="links-img" />
                      <div className="d-flex flex-column gap-15 subtotal">
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
              {/* <Dropdown>
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
              </Dropdown> */}
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
              <Nav.Link className="nav-link text-white" href="/my-orders">
                My Orders
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
