import React, { Component } from "react";
import { NormalButton } from "../components/button/NormalButton";

export default class NewsSection extends Component {
  render() {
    return (
      <div className="news-section">
        <div className="news-section__featured-post">
          <div className="news-section__featured-post--title">
            Featured Posts
          </div>
          <img src="/photos/photo-15.jpg" />
        </div>
        <div className="news-section__tips-and-tricks">
          <div className="news-section__tips-and-tricks--title">
            Tips and Tricks
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
