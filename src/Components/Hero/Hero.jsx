import React from "react";
import "./Hero.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className="hero">
      <Nav />
      <header className="header-area container">
        <div className="head">
          <h1>Creative Home Simpify your Furniture</h1>
          <p>
            Do i have consent to record this meeting gain locaion, root-and
            branch, review, nor game plan who’s the goto
          </p>
          <a href="#shop" className="btn">Shop Now</a>
        </div>
      </header>
    </div>
  );
};

export default Header;
