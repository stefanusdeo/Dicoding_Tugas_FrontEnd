/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import "regenerator-runtime";
import "../styles/style.css";
import "../styles/responsive.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
