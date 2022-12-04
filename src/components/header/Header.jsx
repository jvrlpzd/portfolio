import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1 className="javier">Javier Lopez Dominguez</h1>
        <h2 className="dev">Développeur FullStack React.js / Node.js</h2>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img src={ME} alt="Javier Lopez Dominguez" />
        </div> */}

        <a href="#contact" className="scroll__down">
          Descendre
        </a>
      </div>
    </header>
  );
};

export default Header;
