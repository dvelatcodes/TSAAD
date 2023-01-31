import React, { useState, useEffect } from "react";
import "./header.scss";
import image1 from "../../assets/images/woman-with-satisfied-expression.png";

const Header = () => {
  const navClasses = ["nav1", "nav2", "nav3", "nav4", "nav5"];
  const heroClasses = [
    "header__hero1",
    "header__hero2",
    "header__hero3",
    "header__hero4",
    "header__hero5",
  ];
  const imgClasses = [
    "header__hero-img1",
    "header__hero-img2",
    "header__hero-img3",
    "header__hero-img4",
    "header__hero-img5",
  ];
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {
      setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 12000);
    };
  }, []);
  useEffect(() => {
    return () => {
      if (counter === 4) setCounter(0);
    };
  }, [counter]);

  return (
    <>
      <header>
        <nav className={`${navClasses[counter]}`}>
          <div className="header__logo">TSAAD</div>
          <div className="header__nav">
            <div>Courses</div>
            <div>Find A Tutor</div>
            <div>How It Works</div>
            <div>About Us</div>
            <div className="sign-in">Sign In</div>
          </div>
        </nav>
        {/* <div className="">{counter}</div> */}
        <div className={`${heroClasses[counter]}`}>
          <div className={`${imgClasses[counter]}`}></div>
          <div className="header__hero-content">
            CURIOSITY.
            <br />
            MEETS. <br />
            DISCOVERY.
            <div className="header__hero-content__quote">
              Meet Tech Masters Today To Answer All Your Questions!
            </div>
            <button className="hero-btn">See How We Can Help</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
