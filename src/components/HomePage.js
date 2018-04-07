import React, { Component } from "react";
import Header from './Header';
import IntroductionSectionContainer from './IntroductionSectionContainer';
import GridSection from './GridSection';
import PricingSection from './PricingSection';
import StorySection from './StorySection';
import LogoBrandSection from './LogoBrandSection';
import NewsSection from './NewsSection';
import BuyCesisSection from './BuyCesisSection';
import Footer from './Footer';
import CreditSection from './CreditSection';

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
        <NewsSection />
        <BuyCesisSection />
        <Footer />
        <CreditSection />
      </div>
    );
  }
}

export default HomePage;
