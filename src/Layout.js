// Layout.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React All Concept
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/form">
                  Forms
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/counter">
                  Counter
                </Link>
              </li>
              <li>
                <Link className="nav-link" aria-current="page" to="/faculty">
                  Faculties-Static
                </Link>
              </li>
              <li>
                <Link className="nav-link" aria-current="page" to="/api">
                  API-Mock
                </Link>
              </li>
              <li>
                <Link className="nav-link" aria-current="page" to="/AddFac">
                  Add-Faculty
                </Link>
              </li>
              {/* This is get all faculty using MERN API */}
              <li>
                <Link className="nav-link" aria-current="page" to="/apimern">
                  API-MERN
                </Link>
              </li>
              <li>
                <Link className="nav-link" aria-current="page" to="/AddFit">
                  Add-Fitness-Challenges
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
