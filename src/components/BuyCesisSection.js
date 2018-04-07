import React, { Component } from "react";
import { Link, NavLink, Router } from "react-router-dom";
import { NormalButton } from "../components/button/NormalButton";

export default class BuyCesisSection extends Component {
  render() {
    return (
      <header className="buy-cesis">
        <img className="buy-cesis__photo" src="/photos/photo-17.jpg" />
        <div className="buy-cesis-introduction">
          <div className="buy-cesis__title">
            <div>Let's make your</div>
            <div>website great again</div>
          </div>
          <p className="buy-cesis__description">
            Creating your amazing website today.
          </p>
          <NormalButton text={"Buy Cesis"} color={"white-button"} />
        </div>
      </header>
    );
  }
}
