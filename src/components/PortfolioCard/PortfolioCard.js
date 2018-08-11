import React, {Component} from "react";
import PortfolioModal from './../PortfolioModal';
import Modal from 'react-bootstrap4-modal';


class PortfolioCard extends Component  {

  render() {
    
    return (

        <div className="col-md-4">  
                <div data-aos="fade-left" className='border border-dark bg-color max-h mx-auto portfolio-card'> 
                  <img  className="image img-fluid" src={this.props.image}/>
                  <div className="border border-dark middle rounded">
                  <div className="text" onClick={this.props.toggle}>Learn More</div>
                  </div>
                  <p>{this.props.name}</p>
                </div>
                <PortfolioModal
                    isOpen={this.props.isOpen}
                    description={this.props.description}
                    toggle={this.props.toggle}
                    name={this.props.name}
                />
                {console.log("props for PortfolioCard", this.props)}
        </div>
      );
    };
};

export default PortfolioCard;