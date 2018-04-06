import React, { Component } from "react";
import Header from './Header';
import IntroductionSectionContainer from './IntroductionSectionContainer';
import GridSection from './GridSection';
import PricingSection from './PricingSection';
import StorySection from './StorySection';

class HomePage extends Component {

  render() {
    return (
      <div className="homepage">
        <Header />
        <IntroductionSectionContainer />
        <GridSection />
        <PricingSection />
        <StorySection />
      </div>
    );
  }
}

export default HomePage;
