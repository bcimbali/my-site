import "./App.css";
import "aos/dist/aos.css";

import React, { Component } from "react";

import AOS from "aos";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PortfolioCard from "./components/PortfolioCard";
import PortfolioModal from "./components/PortfolioModal";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
/**
 * hw idea: what if portfolio_pieces came from an ajax request, was loaded into state
 */
import portfolio_pieces from "./portfolio_pieces.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.modalHandler = this.modalHandler.bind(this);
    this.populateModal = this.populateModal.bind(this);
    this.state = {
      details: false,
      portfolio_pieces: portfolio_pieces,
      selected_piece: {}
    };
  }

  componentDidMount() {
    AOS.init();
  }

  /** Toggles the pop-up window state btwn true and false. */
  toggle() {
    const currentState = this.state.details;
    this.setState({ details: !currentState });
  }

  /** Populates the modal with the currently selected portfolio piece */
  populateModal(i) {
    this.setState({ selected_piece: portfolio_pieces[i] });
  }

  /** Wrapper function for the "Check it Out" onClick handler */
  modalHandler(event) {
    this.toggle();
    this.populateModal(event);
  }

  render() {
    const { details, selected_piece } = this.state;
    configureAnchors({ offset: -50, scrollDuration: 700 });
    return (
      <>
        <div className="content-container bg-color">
          <Navbar className="w-100" />
          <ScrollableAnchor className="w-100" id={"section1"}>
            <div className="bg-color page container-fluid">
              <div className="d-flex display-3 justify-content-center h-75 row align-items-center text-center main-font">
                <div className="col fade-in gray-font" data-testid="name-intro">
                  Hey, I'm Brett Cimbalik. I'm a front-end developer.
                </div>
              </div>
              <div className="d-flex display-3 justify-content-center h-25 row  text-center main-font">
                <div className="col fade-in">
                  <a className="text-dark" href="#section2">
                    <i className="fas fa-2x fa-angle-down pulsate-bck" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor className="w-100" id={"section2"}>
            <div className="bg-color page container-fluid">
              <div className="h-50 row align-items-center">
                <img
                  data-aos="fade-right"
                  className="border-dark img-resp mx-auto rounded-circle"
                  alt="Brett"
                  src="https://res.cloudinary.com/bcimbali/image/upload/dpr_auto,c_scale,f_auto,q_auto:eco/v1534430386/Portfolio/Profile_Pic.jpg"
                />
              </div>
              <div className="d-flex display-3 justify-content-center h-50 row text-center main-font">
                <div
                  data-aos="fade-left"
                  className="about-font bg-color col gray-font"
                  data-testid="about-text"
                >
                  I'm a web developer and programmer based in Chicago, IL.{" "}
                  <br />
                  <br />I make web applications, usually with the MERN stack. I
                  prefer to work in React/Nextjs, but learning a new language or
                  framework isn't a hassle. I have several years of programming
                  experience and am rather comfortable with front-end or
                  back-end development.
                </div>
              </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"section3"}>
            <div className="bg-color page container-fluid h-100">
              <div className="d-flex row h-100 align-items-center text-center">
                {this.state.portfolio_pieces.map((piece) => (
                  <PortfolioCard
                    key={piece.id}
                    id={piece.id}
                    name={piece.name}
                    image={piece.images[1]}
                    description={piece.description}
                    isOpen={this.state.details}
                    modalHandler={this.modalHandler}
                    toggle={this.toggle}
                  />
                ))}
                <PortfolioModal
                  isOpen={details}
                  github={selected_piece.github}
                  description={selected_piece.description}
                  images={selected_piece.images}
                  live={selected_piece.live}
                  toggle={this.toggle}
                  name={selected_piece.name}
                />
              </div>
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={"section4"}>
            <div className="bg-color page container-fluid">
              <div className="d-flex display-3 justify-content-center h-100 row align-items-center text-center main-font">
                <div data-aos="fade-right" className="bg-color">
                  <p className="contact-font gray-font">
                    Say hello: <br />
                    <br />
                    hello [at] brettcimbalik [dot] com
                  </p>
                </div>
              </div>
            </div>
          </ScrollableAnchor>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
