import React from "react";
import "./css/Navbar.css";
import GithubImg from "./assets/githubsvg.svg";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <b>vipulKoladara</b>
        </div>
      </div>
      <div className="navbar-center">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={GithubImg} alt="" srcset="" height={"55px"} />
      </div>
    </div>
  );
}

export default Navbar;
