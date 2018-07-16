import React, { Component } from 'react';
import './App.css';
// import { Parallax, Background } from 'react-parallax';
import Navbar from "./components/Navbar";
import { Parallax, ParallaxLayer } from 'react-spring'
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

class App extends Component {
  render() {
    configureAnchors({offset: -80, scrollDuration: 800})
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
            <div className='bg-color display-3 page main-font'> Portfolio </div>
          </div>
        </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
        <div className='bg-color page container-fluid'> 
          <div className="d-flex display-3 justify-content-center h-100 row align-items-center text-center main-font">  
            <div className='bg-color display-3 page main-font'> Contact </div>
          </div>
        </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
