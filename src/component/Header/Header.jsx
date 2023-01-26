import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="header__logo">TSAAD</div>
          <div className="header__nav">
            <div>Courses</div>
            <div>Find A Tutor</div>
            <div>How It Works</div>
            <div>About Us</div>
          </div>
        </nav>
        <div className="header__hero">
          <div className="header__hero-img"></div>
          <div className="header__hero-content"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
