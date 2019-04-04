import React from "react";

/** Navigation bar for site */
function Navbar() {
  return (
    <nav className="bg-color border-bottom border-dark d-flex navbar flex-nowrap gray-font justify-content-between navbar-expand-lg navbar-light fixed-top">
      <h1>
        <a
          className="fade-in hvr-underline-from-center name-font navbar-brand font-weight-bold m-0 px-2 gray-font"
          data-testid="brett-cimbalik"
          href="#section1"
        >
          Brett Cimbalik
        </a>
      </h1>
      <div className="d-flex justify-content-center ml-auto nav-list-font">
        <a
          className="fade-in hvr-underline-from-center px-2 text-dark"
          data-testid="about"
          href="#section2"
        >
          About
        </a>
        <a
          className="fade-in hvr-underline-from-center px-2 text-dark"
          data-testid="portfolio"
          href="#section3"
        >
          Portfolio
        </a>
        <a
          className="fade-in hvr-underline-from-center px-2 text-dark"
          data-testid="contact"
          href="#section4"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
