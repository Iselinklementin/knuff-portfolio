import { Link } from "react-router-dom";
import VNlogo from "../../images/VNlogo.svg";
import knuffLogo from "../../images/knuff-logo.svg";
import codeIcon from "../../images/codeIcon.svg";
import designIcon from "../../images/designIcon.svg";
import aboutIcon from "../../images/aboutIcon.svg";
import React from "react";

function Nav() {
  return (
    <>
      <nav>
        <div className="nav-mobile">
          <Link to="/">
            <img className="logo-mobile" src={VNlogo} alt="Knuff-logo" />
          </Link>
          <div className="link-icons-container">
            <Link to="/websites">
              <img className="nav-icon" src={codeIcon} alt="design-icon" />
            </Link>
            <Link to="/portfolio">
              <img className="nav-icon" src={designIcon} alt="design-icon" />
            </Link>
            <Link to="/about">
              <img className="nav-icon" src={aboutIcon} alt="design-icon" />
            </Link>
          </div>
        </div>

        <div className="nav-desktop">
          <Link className="nav-link" to="/">
            <img className="logo-desktop" src={knuffLogo} alt="Knuff-logo" />
          </Link>
          <div className="link-icons-container">
            <Link to="/websites">
              <img className="nav-icon" src={codeIcon} alt="design-icon" />
            </Link>
            <Link to="/portfolio">
              <img className="nav-icon" src={designIcon} alt="design-icon" />
            </Link>
            <Link to="/about">
              <img className="nav-icon" src={aboutIcon} alt="design-icon" />
            </Link>
            <Link to="#" className="resume-btn">
              Resume
            </Link>
          </div>
        </div>
      </nav>
      <div className="colorDivider"></div>
    </>
  );
}

export default Nav;
