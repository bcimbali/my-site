import React, {Component} from "react";
import Modal from 'react-bootstrap4-modal';


class PortfolioModal extends Component  {

  render() {
    
    return (
        <Modal visible={this.props.isOpen} onClickBackdrop={this.props.toggle}>
            <div className="bg-color justify-content-center modal-header mx-auto w-100">
                <h4 className="font-weight-bold modal-title">{this.props.name}</h4>
            </div>
            <div className="bg-color modal-body">
                <p>{this.props.description}</p>
            </div>
            <div className="bg-color justify-content-between modal-footer">
                <a href={this.props.live} target="_blank" ><i class="fas fa-2x fa-desktop modal-icon"></i></a>
                <button type="button" className="btn btn-dark filter-btn" onClick={this.props.toggle}>
                    Close
                </button>
            </div>
        </Modal>
      );
    };
};

export default PortfolioModal;