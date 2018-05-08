import React from "react";
import { render } from "react-dom";

import HomePage from './components/HomePage';

import "normalize.css/normalize.css";
import "./styles/styles.scss";

render(<HomePage />, document.getElementById("app"));
