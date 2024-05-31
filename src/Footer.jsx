import React from "react";
import "./css/Footer.css";
import GithubImg from "./assets/githubsvg.svg";
import facebookImg from "./assets/facebooksvg.svg";
import instagramImg from "./assets/instagramsvg.svg";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-main-left">VipulKoladara</div>
      <div className="footer-main-right">
        <div className="facebook-img img">

          <img src={facebookImg} alt="" srcset="" />
        </div>
        <div className="instagram-img img">
    
          <img src={instagramImg} alt="" srcset="" />
        </div>
        <div className="github-img img">
     
          <img src={GithubImg} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
