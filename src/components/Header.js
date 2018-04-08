import React from "react";
import { NormalButton } from "../components/button/NormalButton";

const Header = () => (
  <header className="header">
    <img className="header__photo" src="/photos/photo-1.jpg" />
    <img className="header__brand" src="/icons/brand/brand-white.svg" />
    <div className="header-introduction">
      <p className="header__title">I am Cesis</p>
      <p className="header__description">
        Let's make your website Great Again!
      </p>
      <NormalButton text={"View Porfolio"} color={"white-button"} />
    </div>
  </header>
);

export default Header;
