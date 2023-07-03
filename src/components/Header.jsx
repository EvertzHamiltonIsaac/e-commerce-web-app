import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { useState } from "react";

const Header = () => {
  const [Menu_toggle, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!Menu_toggle);
  };

  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to={"/"} className="link-logo text-white d-flex align-items-center justify-content-center">
                  <img src="/public/logowhite.png" alt="logo" className="logo-img" />
                  Ginger
                </Link>
              </h2>
            </div>
            <div className="input-div col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
          <button onClick={toggleMenu} className="button-toggle">
              <FaBars className="icons-menu"/>
            </button>
            <div className="col-5 flex-end">
            
              <div
                className={`header-upper-links ${
                  Menu_toggle ? "isActive" : ""
                }`}
              >
                <div className="header-upper-links-container">
                  <div>
                    <Link
                      to="/compare-product"
                      className="links-div d-flex align-items-center justify-content-center  gap-10 text-white"
                    >
                      <img src={compare} alt="compare" />
                      <p className="mb-0">
                        Compare <br /> Products
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/wishlist"
                      className="links-div d-flex align-items-center justify-content-center  gap-10 text-white"
                    >
                      <img src={wishlist} alt="wishlist" />
                      <p className="mb-0">
                        Favourite <br /> wishlist
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/login"
                      className="links-div mala-practica d-flex align-items-center justify-content-center  gap-10 text-white"
                    >
                      <img src={user} alt="user" />
                      <p className="mb-0">
                        Log in <br /> My Account
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/cart"
                      className="links-div d-flex align-items-center justify-content-center gap-10 text-white"
                    >
                      <img src={cart} alt="cart" />
                      <div className="d-flex flex-column gap-10">
                        <span className="badge bg-white text-dark">0</span>
                        <p className="mb-0">$ 500</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
