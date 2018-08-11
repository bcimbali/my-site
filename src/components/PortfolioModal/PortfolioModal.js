import React, {Component} from "react";
import Modal from 'react-bootstrap4-modal';


class PortfolioModal extends Component  {

  render() {
    
    return (
        <Modal visible={this.props.isOpen} onClickBackdrop={this.props.toggle}>
            <div className="modal-header mx-auto">
                <h4 className="font-weight-bold modal-title">{this.props.name}</h4>
            </div>
            <div className="modal-body">
                <p>{this.props.description}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-dark filter-btn" onClick={this.props.toggle}>
                Close
            </button>
            </div>
        </Modal>
      );
    };
};

export default PortfolioModal;