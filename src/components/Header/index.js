import React from "react";

import Web from "./Web";
import Mobile from "./Mobile";

import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="header">
      <div className="logo"></div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)} className="menu-icon">
            <i className="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
