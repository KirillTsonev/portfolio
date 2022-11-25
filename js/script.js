const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__counter");
const lines = document.querySelectorAll(".skills__meter-bar span");

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});