import "./reset.css";
import "./styles.css";

import { homePage } from "./modules/home.js";
import { menuPage } from "./modules/menu.js";
import { aboutPage } from "./modules/about.js";

const content = document.querySelector(".content");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homePage();

homeButton.addEventListener("click", () => {
    content.firstElementChild.remove();
    homePage();
})

menuButton.addEventListener("click", () => {
    content.firstElementChild.remove();
    menuPage();
})

aboutButton.addEventListener("click", () => {
    content.firstElementChild.remove();
    aboutPage();
})