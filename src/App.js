import React, { Component } from 'react';
import './App.css';
// import { Parallax, Background } from 'react-parallax';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PortfolioCard from "./components/PortfolioCard";
import PortfolioModal from './components/PortfolioModal';
import { Parallax, ParallaxLayer } from 'react-spring'
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import AOS from 'aos';
import portfolio_pieces from "./portfolio_pieces.json";
import 'aos/dist/aos.css';

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
    }
  }

  // Toggles the pop-up window state btwn true and false.
  toggle() {
    const currentState = this.state.details;
    this.setState({ details: !currentState });
    console.log('After toggle works: ', this.state.details);
  }

  // Populates the modal with the currently selected portfolio piece
  populateModal(i) {
    // return portfolio_pieces[info];
    console.log("populateModal this: ", this);
    this.setState({ selected_piece: portfolio_pieces[i]})
    console.log("selected piece is now....: " , this.state.selected_piece)
  }

  // Wrapper function for "Learn More" onClick handler
  modalHandler(event) {
    // console.log("this in modal handler: ", this);
    console.log("this is the event: ", event);
    this.toggle();
    this.populateModal(event);
  }

  componentDidMount() {
    AOS.init();
  }

  render() {
    configureAnchors({offset: -58, scrollDuration: 700})
    return (
      <div className='body'>
        <Navbar/>
        <ScrollableAnchor id={'section1'}>
          <div className='bg-color page container-fluid'> 
            <div className="d-flex display-3 justify-content-center h-75 row align-items-center text-center main-font">
                <div className="col fade-in">
                  Hello, I'm Brett Cimbalik. I'm a front-end developer.
                </div>
            </div>
            <div className="d-flex display-3 justify-content-center h-25 row  text-center main-font">
                <div className="col fade-in">
                  <a className="text-dark" href="#section2" ><i className="fas fa-2x fa-angle-down pulsate-bck"></i></a>
                </div>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div className='bg-color page container-fluid'> 
            <div className="display-3 h-50 row align-items-center">
              {/* <div className='bg-color col'>  */}
                <img data-aos="fade-right"  className="border-dark img-resp mx-auto rounded-circle" alt="Brett" src="./images/Profile_Pic.jpg"></img>
              {/* </div> */}
            </div>
            <div className="d-flex display-3 justify-content-center h-50 row text-center main-font">
              <div data-aos="fade-left" className='about-font bg-color col'>
                I'm a web developer and programmer based in Chicago, IL. <br></br><br></br>
                I make web applications, usually with the MERN stack. I primarily use Javascript, but learning a new language or framework isn't a hassle. I have several years of programming experience and am rather comfortable with front-end or back-end development.
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <div className='border border-danger bg-color page container-fluid h-100'> 
            <div className="border border-success d-flex justify-content-around row h-100 align-items-center text-center">
              {this.state.portfolio_pieces.map(piece =>  (
                <PortfolioCard 
                  key={piece.id}
                  id={piece.id}
                  name={piece.name}
                  image={piece.image}
                  description={piece.description}
                  isOpen={this.state.details}
                  modalHandler={this.modalHandler}
                  toggle={this.toggle}  
                />
              ))}
              <PortfolioModal
                github={this.state.selected_piece.github}
                isOpen={this.state.details}
                description={this.state.selected_piece.description}
                image={this.state.selected_piece.image}
                live={this.state.selected_piece.live}
                toggle={this.toggle}
                name={this.state.selected_piece.name}
              />
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section4'}>
          <div className='bg-color page container-fluid'> 
            <div className="d-flex display-3 justify-content-center h-100 row align-items-center text-center main-font">  
              <div data-aos="fade-right" className='about-font bg-color display-3'> 
              Feel free to contact me at: <br></br><br></br>
              hello [at] brettcimbalik [dot] com
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <Footer />
      </div>
    );
  }
}

export default App;