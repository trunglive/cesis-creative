import React from "react";
import { NormalButton } from "../button/NormalButton";

const IntroductionSection = ({
  title,
  branding,
  buttonInfo,
  firstExtraText,
  secondExtraText
}) => (
  <section className="introduction-section" id="introduction">
    <div className="introduction-section-text">
      <div className="introduction-section__title">
        <p className="introduction-section__title--top">{title[0]}</p>
        <p className="introduction-section__title--middle">{title[1]}</p>
        <p className="introduction-section__title--bottom">{title[2]}</p>
      </div>

      <p className="introduction-section__branding">{branding}</p>
      {firstExtraText && (
        <p className="introduction-section__extra-text-1">{firstExtraText}</p>
      )}

      {secondExtraText && (
        <p className="introduction-section__extra-text-2">{secondExtraText}</p>
      )}
      <NormalButton
        text={buttonInfo}
        color={"black-button"}
        link={"#about-us"}
      />
    </div>
  </section>
);

export default IntroductionSection;
