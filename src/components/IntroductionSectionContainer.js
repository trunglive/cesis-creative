import React, { Component } from "react";
import IntroductionSection from "./IntroductionSection";
import { introductionData } from "../utils/introductionData";

export default class IntroductionSectionContainer extends Component {
  render() {
    return (
      <div className="introduction-section-container">
        <div className="introduction-section-container--top">
          <IntroductionSection {...introductionData[0]} />
          <img
            className="introduction-section-photo"
            src="/photos/photo-2.jpg"
          />
        </div>
        <div className="introduction-section-container--bottom">
          <img
            className="introduction-section-photo"
            src="/photos/photo-3.jpg"
          />
          <IntroductionSection {...introductionData[1]} />
        </div>
      </div>
    );
  }
}
