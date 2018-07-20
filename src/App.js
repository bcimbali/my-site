import React, { Component } from 'react';
import './App.css';
// import { Parallax, Background } from 'react-parallax';
import Navbar from "./components/Navbar";
import { Parallax, ParallaxLayer } from 'react-spring'
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

class App extends Component {
  render() {
    configureAnchors({offset: 0, scrollDuration: 700})
    return (
      <div className='body'>
        <Navbar/>
        <ScrollableAnchor id={'section1'}>
          <div className='bg-color page container-fluid'> 
            <div className="d-flex display-3 justify-content-center h-100 row align-items-center text-center main-font">
                <div className="col hvr-wobble-skew">
                  Hello, I'm Brett Cimbalik. I'm a front-end developer.
                </div>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
        <div className='bg-color page container-fluid'> 
          <div className="d-flex display-3 justify-content-center h-100 row align-items-center text-center main-font">
            <div className='about-font bg-color col'> 
              I'm a web developer and programmer based in Chicago, IL. <br></br><br></br>
              I make web applications, usually with the MERN stack. I primarily use Javascript, but learning a new language or framework isn't a hassle. I have several years of programming experience and am rather comfortable with front-end or back-end development.
            </div>
          </div>
        </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
        <div className='bg-color page container-fluid'> 
          <div className="d-flex display-3 justify-content-center h-100 row align-items-center text-center main-font">  
            <div className='bg-color display-3 main-font'> 
            Portfolio
            </div>
          </div>
        </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section4'}>
        <div className='bg-color page container-fluid'> 
          <div className="d-flex display-3 justify-content-center h-100 row align-items-center text-center main-font">  
            <div className='about-font bg-color display-3'> 
            Feel free to contact me at: <br></br><br></br>
            hello [at] brettcimbalik [dot] com
            </div>
          </div>
        </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
