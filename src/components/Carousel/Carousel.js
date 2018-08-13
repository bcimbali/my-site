import React, {Component} from "react";



class Carousel extends Component  {

  render() {
    
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-img carousel-item active">
                    <img className="carousel-img d-block w-100" src={this.props.imageOne} alt="First slide" />
                </div>
                <div className="carousel-img carousel-item">
                    <img className="carousel-img d-block w-100" src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/Git-and-Github-Featured-Image.png" alt="Second slide" />
                </div>
                <div className="carousel-img carousel-item">
                    <img className="carousel-img d-block w-100" src="https://5.imimg.com/data5/MB/AT/GLADMIN-8064455/web-design-solutions-service-500x500.png" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
      );
    };
};

export default Carousel;