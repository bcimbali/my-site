import React from "react";

/** Footer for site */
function Footer() {
  return (
    <footer className="footer d-flex justify-content-center">
      <a
        data-testid="github"
        href="https://github.com/bcimbali"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab m-3 fa-3x fa-github-square footer-icon hvr-wobble-skew" />
      </a>
      <a
        data-testid="linkedin"
        href="https://www.linkedin.com/in/brett-cimbalik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab m-3 fa-3x fa-linkedin footer-icon hvr-wobble-skew" />
      </a>
      <a
        data-testid="resume"
        href="https://drive.google.com/file/d/1Flm8I-gMj_q8hS8_AAu3z_Lrs1ceHImL/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-file-alt m-3 fa-3x footer-icon hvr-wobble-skew" />
      </a>
    </footer>
  );
}

export default Footer;
