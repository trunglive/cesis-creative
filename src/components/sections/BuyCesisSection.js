import React from "react";
import { NormalButton } from "../button/NormalButton";

const BuyCesisSection = () => (
  <header className="buy-cesis" id="buy-cesis">
    <img className="buy-cesis__photo" src="/photos/photo-17.jpg" />
    <div className="buy-cesis-introduction">
      <div className="buy-cesis__title">
        <div>Let's make your</div>
        <div>website great again</div>
      </div>
      <p className="buy-cesis__description">
        Creating your amazing website today.
      </p>
      <NormalButton
        text={"Buy Cesis"}
        color={"white-button"}
        link={"#pricing"}
      />
    </div>
  </header>
);

export default BuyCesisSection;
