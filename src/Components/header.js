import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="row"></div>
      <div className="col"></div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="row">
          <div className="col">
            <span className="navbar-brand mb-1 h1">
              <h1 className="display-4">Manuel Pierre</h1>
            </span>
          </div>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
