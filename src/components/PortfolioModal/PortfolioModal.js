import React from "react";
import Modal from 'react-bootstrap4-modal';
import Carousel from './../Carousel';

function PortfolioModal(props)  {
  return (
    <Modal className="" visible={props.isOpen} onClickBackdrop={props.toggle}>
      <div className="bg-color border-bottom-0 justify-content-center modal-header mx-auto w-100">
          <h4 className="font-weight-bold modal-title">{props.name}</h4>
      </div>
      <div className="bg-color modal-body">
        <Carousel 
            imageOne={props.image}
            imageTwo={props.imageTwo}
            imageThree={props.imageThree}
        />            
        <p>{props.description}</p>
      </div>
      <div className="bg-color border-top-0 justify-content-between modal-footer">
        <a href={props.live} target="_blank" rel="noopener noreferrer"><i className="fas fa-2x fa-desktop hvr-wobble-skew modal-icon"></i></a>
        <a href={props.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-github-alt hvr-wobble-skew modal-icon"></i></a>
        <button className="bg-color modal-icon hvr-wobble-skew" onClick={props.toggle}>
            <i className="fas fa-2x fa-times"></i>
        </button>
      </div>
    </Modal>
    );
};

export default PortfolioModal;