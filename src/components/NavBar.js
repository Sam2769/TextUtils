import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <a
            className={`navbar-brand text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            href="/"
          >
            {props.title}
          </a>
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
                <a
                  className={`nav-link active text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  href="/about"
                >
                  {props.aboutText}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            <span className="palette-1 dot" onClick={props.maroon}></span>
            {/*RED BUTTON*/}
            <span className="palette-2 dot" onClick={props.green}></span>
            {/* GREEN BUTTON*/}
            <span className="palette-3 dot" onClick={props.grey}></span>
            {/*GREY BUTTON */}
            <div className="form-check form-switch">
              <input
                className="form-check-input mx-1"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.modeText} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
