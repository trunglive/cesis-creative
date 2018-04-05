import React, { Component } from "react";
import Header from './Header';
import IntroductionSectionContainer from './IntroductionSectionContainer';
import GridSection from './GridSection';

class HomePage extends Component {

  render() {
    return (
      <div className="homepage">
        <Header />
        <IntroductionSectionContainer />
        <GridSection />
      </div>
    );
  }
}

export default HomePage;
