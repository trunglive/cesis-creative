import React, { Component } from "react";

export default class Menu extends Component {
  state = {
    menuIsSelected: false
  };

  handleSectionSelect = () => {
    document.getElementById("menu-toggle").click();
  };

  handleMenuToggle = () => {
    const { menuIsSelected } = this.state;

    if (menuIsSelected) {
      document.body.style.overflow = "auto";
      document.getElementsByClassName(
        "menu__button--open"
      )[0].style.visibility =
        "visible";
      document.getElementsByClassName(
        "menu__button--close"
      )[0].style.visibility =
        "hidden";
    } else {
      document.body.style.overflow = "hidden";
      document.getElementsByClassName(
        "menu__button--open"
      )[0].style.visibility =
        "hidden";
      document.getElementsByClassName(
        "menu__button--close"
      )[0].style.visibility =
        "visible";
    }

    this.setState({ menuIsSelected: !menuIsSelected });
  };

  render() {
    return (
      <div className="menu" id="menu">
        <input
          type="checkbox"
          className="menu__checkbox"
          id="menu-toggle"
          onClick={this.handleMenuToggle}
        />
        <label htmlFor="menu-toggle" className="menu__button" id="menu__button">
          <img className="menu__button--open" src="/icons/misc/menu-open.svg" />
          <img className="menu__button--close" src="/icons/misc/menu-close.svg" />
        </label>
        <div className="menu__background" />

        <div className="menu__content" id="menu__content">
          <ul className="menu__list">
            <li className="menu__item">
              <a
                href="#introduction"
                className="menu__link"
                onClick={this.handleSectionSelect}
              >
                Introduction
              </a>
            </li>
            <li className="menu__item">
              <a
                href="#services"
                className="menu__link"
                onClick={this.handleSectionSelect}
              >
                Services
              </a>
            </li>
            <li className="menu__item">
              <a
                href="#pricing"
                className="menu__link"
                onClick={this.handleSectionSelect}
              >
                Pricing
              </a>
            </li>
            <li className="menu__item">
              <a
                href="#about-us"
                className="menu__link"
                onClick={this.handleSectionSelect}
              >
                About Us
              </a>
            </li>
            <li className="menu__item">
              <a
                href="#news"
                className="menu__link"
                onClick={this.handleSectionSelect}
              >
                News
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
