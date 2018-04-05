import React, { Component } from "react";
import { Link, NavLink, Router } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="header__photo" src="/photos/photo-1.jpg" />
        <div className="header-introduction">
          <p className="header__title">I am Cesis</p>
          <p className="header__description">
            Let's make your website Great Again!
          </p>
          <a className="header__button" href="#" target="_blank">
            View Portfolio
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
