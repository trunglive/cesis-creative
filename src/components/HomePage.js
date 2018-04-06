import React, { Component } from "react";
import Header from './Header';
import IntroductionSectionContainer from './IntroductionSectionContainer';
import GridSection from './GridSection';
import PricingSection from './PricingSection';
import StorySection from './StorySection';
import LogoBrandSection from './LogoBrandSection';

class HomePage extends Component {

  render() {
    return (
      <div className="homepage">
        <Header />
        <IntroductionSectionContainer />
        <GridSection />
        <PricingSection />
        <StorySection />
        <LogoBrandSection />
      </div>
    );
  }
}

export default HomePage;
