import React from "react";

import "../../styles/header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="content-wrapper row">
        <div>
          <h1 className="logo">
            <a href="https://www.eleuther.ai/">
              <img
                id="logo"
                className="logo-image"
                src="img/eai_logo_small_exported.png"
                alt="EleutherAI logo"
              />
              <span className="logo-text">EleutherAI</span>
            </a>
          </h1>
        </div>

        <div className="head-right"></div>
      </div>
    </header>
  );
};

export default Header;
