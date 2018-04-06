import React from "react";

export const NormalButton = ({ text, color, size }) => (
  <a className={`button button--normal ${color} ${size}`} href="#">
    {text}
  </a>
);
