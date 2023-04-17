import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg mb-5"
      style={{ backgroundColor: "navy" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link style={{ textDecoration: "none", color: "white" }} to="/users">
          <a className="navbar-brand" style={{ color: "white" }}>
            SocioPedia
          </a>
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link style={{ textDecoration: "none" }} to="/users">
              <a className="nav-link" style={{ color: "white" }}>
                Users
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: "none" }} to="/add-new-place">
              <a className="nav-link" style={{ color: "white" }}>
                Add New
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: "none" }} to="/login">
              <a className="nav-link" style={{ color: "white" }}>
                Login
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: "none" }} to="/signup">
              <a className="nav-link" style={{ color: "white" }}>
                Sign Up
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
