import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  const [active, setActive] = useState(false)
  
  const isActive = () => { 
    window.scrollY > 0 ? setActive(true) : setActive(false)

  }
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => { 
      window.removeEventListener("scroll", isActive);
    }
  },[])
  
  const currentUser = {
    id:1,
    username: "Nasr",
    isSeller: true,
  };

  return (
    <div className={active? "navbar active" : "navbar"}>
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
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Juin</button>}
          {currentUser && (
            <div className="user">
              <img/>
            </div>
          )}
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
