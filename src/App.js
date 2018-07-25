import React, { Component } from 'react';
import './App.css';
// import { Parallax, Background } from 'react-parallax';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Parallax, ParallaxLayer } from 'react-spring'
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {

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
        <div className='bg-color page container-fluid'> 
          <div className="d-flex display-3 justify-content-center h-100 row align-items-center text-center main-font">  
            <div data-aos="fade-left" className='bg-color display-3 main-font'> 
            Portfolio
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
