import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer className="footer">
    <div className="footer__info">
      <div className="footer__brand-group">
        <img src="/icons/brand/brand-black.svg" />
        <p>Cesis Creative</p>
      </div>
      <div className="footer__contact-group">
        <p>
          &copy; 2015 - 2018 Tranmautritam Team. Cesis Creative Demo for Cesis
          Wordpress Theme.
        </p>
        <div>
          <span>Twitter</span>
          <span>.</span>
          <span>Instagram</span>
          <span>.</span>
          <span>Dribbble</span>
        </div>
      </div>
    </div>

    <div className="footer__subscribe-newsletter">
      <p>Subscribe Newsletter</p>
      <div className="footer__input-group">
        <input type="email" placeholder="Enter your email" />
        <img src="/icons/arrow.svg" />
      </div>
    </div>
  </footer>
);

export default Footer;
