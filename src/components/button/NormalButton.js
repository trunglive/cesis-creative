import React from "react";

export const NormalButton = ({ text, color }) => (
  <a className={`button--normal ${color}`} href="#" target="_blank">
    {text}
  </a>
);
