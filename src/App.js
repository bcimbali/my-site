import React, { Component } from 'react';
import './App.css';
// import { Parallax, Background } from 'react-parallax';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PortfolioCard from "./components/PortfolioCard";
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
    this.state = {
      details: false,
      portfolio_pieces: portfolio_pieces
    }
  }

  toggle() {
    const currentState = this.state.details;
    this.setState({ details: !currentState });
    console.log('After toggle works: ', this.state.details);
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
                  <a className="text-dark" href="#section2" ><i className="fas fa-angle-down pulsate-bck"></i></a>
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
          <div className='border border-danger bg-color page container-fluid'> 
            <div className="border border-success d-flex justify-content-around row h-100 align-items-center text-center">
              
              {this.state.portfolio_pieces.map(piece =>  (
                <PortfolioCard 
                  key={piece.id}
                  id={piece.id}
                  name={piece.name}
                  image={piece.image}
                  isOpen={this.state.details}
                  toggle={this.toggle}
                    
                />
              ))}
              
              <div className="col-md-4">  
                <div data-aos="fade-right" className='border border-primary bg-color mx-auto max-h'> 
                  <img  className="img-fluid" src="./images/Cartographer_H_New_Screenshot.PNG"/>
                  <p>Cartographer Hangman</p>
                </div>
              </div>
              <div className="col-md-4">  
                <div data-aos="fade-left" className='border border-primary bg-color display-3 m-2 main-font'> 
                  Box 3
                </div>
              </div>
              <div className="col-md-4">  
                <div data-aos="fade-right" className='border border-primary bg-color display-3 m-2 main-font'> 
                  Box 4
                </div>
              </div>
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