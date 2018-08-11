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
                <Modal visible={this.props.isOpen} onClickBackdrop={this.props.toggle}>
                    <div className="modal-header mx-auto">
                        <h4 className="font-weight-bold modal-title">Passed from my modal component</h4>
                    </div>
                    <div className="modal-body">
                        <p>Are there toxic chemicals stored near where you live or work? If there are, are those chemicals being released to the air or water nearby? Would you like to find out?</p>
                        <p>We were curious (concerned). We understand, locating that information is very tricky.</p>
                        <p>This is an easy-to-use resource for people to search our map and find facilities working with toxic chemicals nearby their work or home. Once a facility is clicked, a pop-up window appears and gives a quick run-down of the facilities details. If the user wants to learn more about, say, particular chemicals or if the facility is in compliance with the EPA, they are linked directly to an EPA page for that particular resource.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary filter-btn" onClick={this.props.toggle}>
                        Close
                    </button>
                    </div>
                </Modal>
                {console.log("props for PortfolioCard", this.props)}
        </div>
      );
    };
};

export default PortfolioCard;