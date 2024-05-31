import React from "react";
import "./css/Work.css";
import Thumbnail from "./assets/thumbnail.png";

function Work() {
  return (
    <div className="work-main" id="work">
      <div className="work-section-main">
        <div className="work-section">
          <div className="work">work</div>
          <hr width="100%;" color="#a6bbcc" size="3" />
        </div>
        <div className="work-section-2">
          <div className="about-section-2-top">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo atque maxime error qui officia, explicabo molestias minima inventore, voluptatibus consequuntur, magnam repellendus repudiandae consectetur dolore. Aut eos eius necessitatibus voluptate?
          </div>
        </div>
        <div className="work-blog">
            <div className="work-blog-post">
                <div className="work-blog-post-img">
                <img src={Thumbnail} alt="" height="200px"/>
                </div>
            <div className="work-blog-post-title">DESIGN PORTFOLIO</div>
            <div className="work-blog-post-desc">HTML CSS JAVASCRIPT</div>
            </div>

            <div className="work-blog-post">
                <div className="work-blog-post-img">
                <img src={Thumbnail} alt="" height="200px"/>
                </div>
            <div className="work-blog-post-title">DESIGN PORTFOLIO</div>
            <div className="work-blog-post-desc">HTML CSS JAVASCRIPT</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
