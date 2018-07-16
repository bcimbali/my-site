import React, {Component} from "react";

class Navbar extends Component  {

  render() {
    
    return (

      <nav class="bg-color border-bottom border-dark d-flex navbar navbar-expand-lg navbar-light sticky-top">
        <a class="hvr-wobble-skew name-font navbar-brand font-weight-bold px-2" href="#section1">Brett Cimbalik</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-auto" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto nav-list-font">
            <a class="hvr-buzz nav-item nav-link px-2" href="#section1">About</a>
            <a class="hvr-buzz nav-item nav-link px-2" href="#section2">Portfolio</a>
            <a class="hvr-buzz nav-item nav-link px-2" href="#section3">Contact</a>
          </div>
        </div>
      </nav>
      );
    };
};

export default Navbar;