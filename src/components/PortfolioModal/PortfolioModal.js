import React, {Component} from "react";
import Modal from 'react-bootstrap4-modal';
import Carousel from './../Carousel';

class PortfolioModal extends Component  {

  render() {
    
    return (
        <Modal visible={this.props.isOpen} onClickBackdrop={this.props.toggle}>
            <div className="bg-color border-bottom-0 justify-content-center modal-header mx-auto w-100">
                <h4 className="font-weight-bold modal-title">{this.props.name}</h4>
            </div>
            <div className="bg-color modal-body">
                <Carousel 
                    imageOne={this.props.image}
                />
                {/* <img className="rounded thumbnail img-fluid" src={this.props.image} /> */}
                
                <p>{this.props.description}</p>
            </div>
            <div className="bg-color border-top-0 justify-content-between modal-footer">
                <a href={this.props.live} target="_blank" ><i class="fas fa-2x fa-desktop modal-icon"></i></a>
                <a href={this.props.github} target="_blank" ><i class="fab fa-2x fa-github-alt modal-icon"></i></a>
                <button className="bg-color modal-icon remove-bootstrap-glow" onClick={this.props.toggle}>
                    <i className="fas fa-2x fa-times"></i>
                </button>
            </div>
        </Modal>
      );
    };
};

export default PortfolioModal;