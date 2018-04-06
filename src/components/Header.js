import React, { Component } from "react";
import { Link, NavLink, Router } from "react-router-dom";
import { NormalButton } from '../components/button/NormalButton';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="header__photo" src="/photos/photo-1.jpg" />
        <img className="header__brand" src="/icons/brand-white.svg" />
        <div className="header-introduction">
          <p className="header__title">I am Cesis</p>
          <p className="header__description">
            Let's make your website Great Again!
          </p>
          <NormalButton text={"View Porfolio"} color={"white-button"} />
        </div>
      </header>
    );
  }
}

export default Header;
