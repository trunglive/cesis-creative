import React, { Component } from "react";
import { NormalButton } from "../components/button/NormalButton";

export default class NewsSection extends Component {
  render() {
    return (
      <div className="news-section">
        <div className="news-section__featured-post">
          <div className="news-section__featured-post--tag">Featured Posts</div>

          <div className="news-section__text">
            <div>
              <span>April 7, 2018 </span>
              <span className="news-section__text--slash">/</span>
              <span>John Doe</span>
            </div>
            <p className="news-section__text--bold">
              How to improve your website in 1 month
            </p>
            <p>
              Modern complex layout and highly customizable components. Full
              control over all layers. Award winning customer support.
            </p>
            <NormalButton text={"Read more"} color={"white-button"} />
          </div>

          
          <img src="/photos/photo-15.jpg" />
        </div>
        <div className="news-section__tips-and-tricks">
          <div className="news-section__tips-and-tricks--tag">
            Tips and Tricks
          </div>
          <div>
            
          </div>


          <div className="news-section__text">
            <div>
              <span>April 7, 2018 </span>
              <span className="news-section__text--slash">/</span>
              <span>John Doe</span>
            </div>
            <p className="news-section__text--bold">
              Easiest way to pick right color for your design
            </p>
            <p>
              Modern complex layout and highly customizable components. Full
              control over layers. Award winning customer support.
            </p>
            <NormalButton text={"Read more"} color={"white-button"} />
          </div>


          <img src="/photos/photo-16.jpg" />
        </div>
        <div className="all-articles">
          <p className="all-articles__title">News</p>
          <div className="all-articles__branding">
            <div>I build identities and experiences to elevate &</div>
            <div>empower organizations.</div>
          </div>
          <NormalButton text={"All articles"} color={"black-button"} />
        </div>
      </div>
    );
  }
}
