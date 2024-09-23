import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/HomePage" role="button">
                HOME
              </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  MINASPACE
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  BLOG
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  PAGES
                </a>
              </li>
              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/components/ProductDashboard" role="button">
              Dashboard
              </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center">
            <img src="/assets/imgs/eee 1 (1).svg" alt="Logo" className="img-fluid" />
          </div>
          <div className="col-lg-4 d-none d-md-block">
            <div className="main">
              <form className="d-flex justify-content-end" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <img src="/assets/imgs/shopandfav.svg" alt="Shop" />
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;