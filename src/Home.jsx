import React from "react";
import "./css/Home.css";
import adminImg from "./assets/admin.png";
function Home() {
  return (
    <div className="home" id="Home">
      <div className="home-left">
        <div className="first-text">Hello, I'm Vipul,</div> 
        <div className="second-text">Full Stack</div>
        <div className="second-text-2">Developer</div>
        <div className="third-text">Contact Me</div>
      </div>
      <div className="home-Right">
        <img src={adminImg} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Home;
