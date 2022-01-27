import React from "react";
import knuffLogo from "../../images/knuff-logo.svg";

export default function Footer() {
  return (
    <footer>
      <img className="logo-footer" src={knuffLogo} alt="Knuff-logo" />
      <p>
        Designed & built by <span>Iselin Haugen</span>
      </p>
      <p>
        <a href="mailto: iselin@knuff.no">iselin@knuff.no</a>
      </p>
    </footer>
  );
}
