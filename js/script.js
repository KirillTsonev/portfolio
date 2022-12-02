import portfolio from "./components/portfolio.js";
import scrolling from "./components/scrolling.js";
import hamburger from "./components/hamburger.js";
import themes from "./components/themes.js";

window.addEventListener('DOMContentLoaded', function() {
    scrolling(".pageup");
    hamburger();
    portfolio();
    themes();
});