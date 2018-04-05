import React, { Component } from "react";
import { Link, NavLink, Router } from "react-router-dom";
import { NormalButton } from "../components/button/NormalButton";

class IntroductionSection extends Component {
  render() {
    const {
      title,
      branding,
      buttonInfo,
      firstExtraText,
      secondExtraText
    } = this.props;
    return (
      <section className="introduction-section">
        <p className="introduction-section__title">{title}</p>
        <p className="introduction-section__branding">{branding}</p>
        {firstExtraText && (
          <p className="introduction-section__extra-text-1">{firstExtraText}</p>
        )}

        {secondExtraText && (
          <p className="introduction-section__extra-text-2">
            {secondExtraText}
          </p>
        )}
        <NormalButton text={buttonInfo} color={"black-button"} />
      </section>
    );
  }
}

export default IntroductionSection;
