import React from "react";
import "./css/About.css";
function About() {
  return (
    <div className="about-main" id="about">
      <div className="about-section-main">
        <div className="about-section">
          <div className="About">about</div>
          <hr width="100%;" color="#a6bbcc" size="3" />
        </div>
        <div className="about-section-2">
          <div className="about-section-2-top">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse molestiae sint impedit assumenda tempore aspernatur? Delectus reiciendis beatae exercitationem voluptas? Cupiditate odit molestias facilis velit magnam, ratione illum quae quo!
          </div>
        </div>
        <div className="about-section-2-bottom">
          <div className="about-section-2-bottom-first">
            <div className="about-element-head">Front-End</div>
            <div className="about-element-desc">60+ Hours Experience</div>
          </div>
          <div className="about-section-2-bottom-two">
            <div className="about-element-head">JavaScript</div>
            <div className="about-element-desc">4 Years Experience</div>
          </div>
          <div className="about-section-2-bottom-third">
            <div className="about-element-head">MERN Developer</div>
            <div className="about-element-desc">120+ Hours Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
