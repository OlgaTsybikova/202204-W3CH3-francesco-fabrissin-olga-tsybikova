import AppComponent from "./components/AppComponent/AppComponent.js";
import StarComponent from "./components/StarComponent/StarComponent.js";

const body = document.querySelector("body");

new AppComponent(body);

const starsContainers = document.querySelectorAll(".serie");

starsContainers.forEach(
  (container) => new StarComponent(container, () => "hola")
);
