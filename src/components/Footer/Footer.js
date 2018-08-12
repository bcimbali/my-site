import React, {Component} from "react";


class Footer extends Component  {



    render() {
    
    return (

        <footer className="footer d-flex justify-content-center">
            <a href="https://github.com/bcimbali" target="_blank"><i className="fab m-3 fa-3x fa-github-square footer-icon"></i></a>
            <a href="https://www.linkedin.com/in/brett-cimbalik/" target="_blank"><i className="fab m-3 fa-3x fa-linkedin footer-icon"></i></a>
        </footer>
        );
    };
};

export default Footer;