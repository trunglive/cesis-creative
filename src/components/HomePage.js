import React from "react";
import Menu from "./navigation/Menu";
import Header from "./navigation/Header";
import IntroductionSectionContainer from "./introduction/IntroductionSectionContainer";
import GridSection from "./sections/GridSection";
import PricingSection from "./sections/PricingSection";
import StorySection from "./sections/StorySection";
import LogoBrandSection from "./sections/LogoBrandSection";
import NewsSection from "./sections/NewsSection";
import BuyCesisSection from "./sections/BuyCesisSection";
import Footer from "./navigation/Footer";
import CreditSection from "./navigation/CreditSection";

const HomePage = () => (
  <div className="homepage">
    <Menu />
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

export default HomePage;
