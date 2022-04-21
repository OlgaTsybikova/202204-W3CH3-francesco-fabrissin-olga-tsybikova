import AppComponent from "./components/AppComponent/AppComponent.js";
import series from "./series.js";

const body = document.querySelector("body");

new AppComponent(body, series);
