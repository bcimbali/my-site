import React from 'react';

function Footer() {
    return (
        <footer className="footer d-flex justify-content-center">
            <a href="https://github.com/bcimbali" target="_blank" rel="noopener noreferrer"><i className="fab m-3 fa-3x fa-github-square footer-icon hvr-wobble-skew"></i></a>
            <a href="https://www.linkedin.com/in/brett-cimbalik/" target="_blank" rel="noopener noreferrer"><i className="fab m-3 fa-3x fa-linkedin footer-icon hvr-wobble-skew"></i></a>
            <a href="https://drive.google.com/file/d/1bVxm7vubNbH8eS0qrormKvvfZagDKLo6/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-alt m-3 fa-3x footer-icon hvr-wobble-skew"></i></a>
        </footer>
    );
};

export default Footer;