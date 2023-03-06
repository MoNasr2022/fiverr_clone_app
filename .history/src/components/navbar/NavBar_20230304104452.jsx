import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Ex</span>
          <span>Fiverr Business</span>
          <span>Fiverr Business</span>
          <span>Fiverr Business</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
