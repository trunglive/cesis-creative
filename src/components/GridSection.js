import React, { Component } from "react";
import { NormalButton } from "../components/button/NormalButton";

export default class GridSection extends Component {
  render() {
    return (
      <div className="grid-section" id="services">
        <ul className="grid-section__menu">
          <li>All</li>
          <li>Web Design</li>
          <li>Interaction</li>
          <li>Applications</li>
          <li>Branding</li>
          <li>Graphic Design</li>
          <li>Photography</li>
        </ul>
        <div className="grid-section__showcase">
          <div className="item item-1">
            <div className="grid-section--text-group">
              <p>Photography</p>
              <p>Canon Microless Pack</p>
            </div>

            <img src="/photos/photo-4.jpg" />
          </div>
          <div className="item item-2">
            <div className="grid-section--text-group">
              <p>Branding</p>
              <p>North Oxford Logo Design</p>
            </div>
            <img src="/photos/photo-5.jpg" />
          </div>
          <div className="item item-3">
            <div className="grid-section--text-group">
              <p>Applications</p>
              <p>North Oxford Gymnastic</p>
            </div>
            <img src="/photos/photo-6.jpg" />
          </div>
          <div className="item item-4">
            <div className="grid-section--text-group">
              <p>Web Design</p>
              <p>Cesis Fashion</p>
            </div>
            <img src="/photos/photo-7.jpg" />
          </div>
          <div className="item item-5">
            <div className="grid-section--text-group">
              <p>Branding</p>
              <p>Kinfolk Brochure</p>
            </div>
            <img src="/photos/photo-8.jpg" />
          </div>
          <div className="item item-6">
            <div className="grid-section--text-group">
              <p>Photography</p>
              <p>Creative Design</p>
            </div>
            <img src="/photos/photo-9.jpg" />
          </div>
          <div className="item item-7">
            <div className="grid-section--text-group">
              <p>Interaction</p>
              <p>Cesis Fashion</p>
            </div>
            <img src="/photos/photo-10.jpg" />
          </div>
          <div className="item item-8">
            <div className="grid-section--text-group">
              <p>Photography</p>
              <p>Crazy Fashion</p>
            </div>
            <img src="/photos/photo-11.jpg" />
          </div>
          <div className="item item-9">
            <div className="grid-section--text-group">
              <p>Branding</p>
              <p>Don't just stand there</p>
            </div>
            <img src="/photos/photo-12.jpg" />
          </div>
        </div>
        <div className="grid-section__button">
          <NormalButton text={"View all"} color={"black-button"} />
        </div>
      </div>
    );
  }
}
