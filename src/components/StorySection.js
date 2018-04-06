import React, { Component } from "react";

export default class StorySection extends Component {
  render() {
    return (
      <div className="story-section">
        <div className="story-section-intro">
          <img className="story-section__brand" src="/icons/brand-purple.svg" />
          <div className="story-section-text">
            <div className="story-section__title">
              <div>
                <p>Let's make</p>
                <p>something great</p>
                <p>together</p>
              </div>
              <div className="vertical-line" />
            </div>
            <p className="story-section__branding">
              I build identities and experiences to elevate & empower
              organizations.
            </p>
          </div>
        </div>

        <div className="story-section-image-slider">
          <img src="/photos/photo-14.jpg" />
        </div>

        <div className="story-section-portfolio">
          <div className="story-section-portfolio__text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis debitis aut rerum necessitatibus
              saepe eveniet ut et voluptates repudiandae sint et molestiae non
              recusandae.
            </p>
          </div>
          <div className="story-section-portfolio__tab">
            <p>work together</p>
            <p>my services</p>
            <p>get in touch</p>
          </div>
        </div>
      </div>
    );
  }
}
