import React, { Component } from "react";
import { NormalButton } from "./button/NormalButton";

export default class PricingSection extends Component {
  render() {
    return (
      <div className="pricing-section" id="pricing">
        <img className="pricing-section__photo" src="/photos/photo-13.jpg" />
        <div className="pricing-section-info-container">
          <p className="pricing-section__title">Select your plans</p>
          <p className="pricing-section__description">
            Creating a website has never been this easy with Cesis Theme
          </p>
          <div className="pricing-section-project-container">
            <div className="pricing-section-project-item">
              <img src="/icons/pricing/personal.svg" />
              <p className="pricing-section-project-item__title">
                Personal Project
              </p>
              <ul>
                <li>Logo Design</li>
                <li className="pricing-section-project-item--linethrough">
                  Brochure Template
                </li>
                <li>Web Design</li>
                <li className="pricing-section-project-item--linethrough">
                  WordPress Development
                </li>
                <li className="pricing-section-project-item--linethrough">
                  Behance Presentation
                </li>
                <li className="pricing-section-project-item--linethrough">
                  Dribbble Shots
                </li>
                <li>2 Revisions</li>
                <li>Support via Email</li>
              </ul>
              <NormalButton
                text={"From $699"}
                color={"white-button"}
                size="small-button"
              />
            </div>

            <div className="pricing-section-project-item">
              <img src="/icons/pricing/business.svg" />
              <p className="pricing-section-project-item__title">
                Business Project
              </p>
              <ul>
                <li>Logo Design</li>
                <li>Brochure Template</li>
                <li>Web Design</li>
                <li>WordPress Development</li>
                <li className="pricing-section-project-item--linethrough">
                  Behance Presentation
                </li>
                <li className="pricing-section-project-item--linethrough">
                  Dribbble Shots
                </li>
                <li>2 Revisions</li>
                <li>Support via Email</li>
              </ul>
              <NormalButton
                text={"From $999"}
                color={"white-button"}
                size="small-button"
              />
            </div>

            <div className="pricing-section-project-item">
              <img src="/icons/pricing/exclusive.svg" />
              <p className="pricing-section-project-item__title">
                Exclusive Project
              </p>
              <ul>
                <li>Logo Design</li>
                <li>Brochure Template</li>
                <li>Web Design</li>
                <li>WordPress Development</li>
                <li>Behance Presentation</li>
                <li>Dribbble Shots</li>
                <li>2 Revisions</li>
                <li>Support via Email</li>
              </ul>
              <NormalButton
                text={"From $1199"}
                color={"white-button"}
                size="small-button"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
