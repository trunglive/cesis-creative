import React from "react";

export const NormalButton = ({ text, color, size, link }) => (
  <a className={`button button--normal ${color} ${size}`} href={link}>
    {text}
  </a>
);
