import React from 'react';

function Navbar()  {    
  return (
    <nav className="bg-color border-bottom border-dark d-flex navbar flex-nowrap gray-font justify-content-between navbar-expand-lg navbar-light fixed-top">
      <a className="fade-in hvr-underline-from-center name-font navbar-brand font-weight-bold m-0 px-2 gray-font" href="#section1">
        Brett Cimbalik
      </a>
      <div className="d-flex justify-content-center ml-auto nav-list-font">
        <a className="fade-in hvr-underline-from-center px-2 text-dark" href="#section2">About</a>
        <a className="fade-in hvr-underline-from-center px-2 text-dark" href="#section3">Portfolio</a>
        <a className="fade-in hvr-underline-from-center px-2 text-dark" href="#section4">Contact</a>
      </div>
    </nav>
    );
};

export default Navbar;