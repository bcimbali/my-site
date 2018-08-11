import React, {Component} from "react";
import Modal from 'react-bootstrap4-modal';


class PortfolioModal extends Component  {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          details: false,
        }
      }
    
      toggle() {
        const currentState = this.state.details;
        this.setState({ details: !currentState });
      }


  render() {
    
    return (
            <Modal visible={this.state.details} onClickBackdrop={() => this.toggle()}>
                <div className="modal-header mx-auto">
                    <h4 className="font-weight-bold modal-title">Passed from my modal component</h4>
                </div>
                <div className="modal-body">
                    <p>Are there toxic chemicals stored near where you live or work? If there are, are those chemicals being released to the air or water nearby? Would you like to find out?</p>
                    <p>We were curious (concerned). We understand, locating that information is very tricky.</p>
                    <p>This is an easy-to-use resource for people to search our map and find facilities working with toxic chemicals nearby their work or home. Once a facility is clicked, a pop-up window appears and gives a quick run-down of the facilities details. If the user wants to learn more about, say, particular chemicals or if the facility is in compliance with the EPA, they are linked directly to an EPA page for that particular resource.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary filter-btn" onClick={() => this.toggle()}>
                    Close
                </button>
                </div>
            </Modal>
      );
    };
};

export default PortfolioModal;