import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  const [active, setActive] = useState(false)
  const isActive = () => { 
    window.screenY > 0 ? setActive(true) : setActive(false)

  }
  useEffect(() => {
    window.addEventListener("scroll", isActive)
    
    return () => { 
      window.removeEventListener("scroll", isActive)
    }
  },[])
  

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fiverr</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Juin</button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
            <span>Test3</span>
            <span>Test4</span>
            <span>Test5</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
