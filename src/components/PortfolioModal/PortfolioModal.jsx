import Carousel from "../Carousel";
import Modal from "react-bootstrap4-modal";
import React from "react";

/** Modal when "Check it Out" is clicked on Portfolio Card */
function PortfolioModal({
  description,
  github,
  images,
  id,
  isOpen,
  live,
  name,
  toggle
}) {
  return (
    <Modal visible={isOpen} onClickBackdrop={toggle}>
      <div className="bg-color border-bottom-0 justify-content-center modal-header mx-auto w-100">
        <h4 className="font-weight-bold modal-title">{name}</h4>
      </div>
      <div className="bg-color modal-body">
        <Carousel images={images} id={id} />
        <p>{description}</p>
      </div>
      <div className="bg-color border-top-0 justify-content-between modal-footer">
        <a href={live} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-2x fa-desktop hvr-wobble-skew modal-icon" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-2x fa-github-alt hvr-wobble-skew modal-icon" />
        </a>
        <button
          className="bg-color modal-icon hvr-wobble-skew"
          onClick={toggle}
        >
          <i className="fas fa-2x fa-times" />
        </button>
      </div>
    </Modal>
  );
}

export default PortfolioModal;
