import React, {Component} from "react";
import PortfolioModal from './../PortfolioModal';


class PortfolioCard extends Component  {


  render() {
    
    return (

        <div className="col-md-4">
                <div data-aos="fade-left" className='min-h max-w mx-auto my-3 portfolio-card rounded'> 
                  <img className="image img-fluid max-h-img p-2 rounded" src={this.props.image}/>
                  <div className="border border-dark middle rounded">
                  <div className="text" onClick={() => {this.props.modalHandler(this.props.id - 1)}}>
                    Check it Out
                  </div>
                  </div>
                  <h3 className="p-2 portfolio-card-font">{this.props.name}</h3>
                  <p className="p-2">{this.props.description}</p>
                </div>
                
                {/* {console.log("props for PortfolioCard", this.props)} */}
                {console.log("this in PortflioCard", this)}
        </div>
      );
    };
};

export default PortfolioCard;