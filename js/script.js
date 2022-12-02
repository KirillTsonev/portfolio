import portfolio from "./components/portfolio.js";

window.addEventListener('DOMContentLoaded', function() {
    portfolio();
});



const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

// const counters = document.querySelectorAll(".skills__counter");
// const lines = document.querySelectorAll(".skills__meter-bar span");

// counters.forEach((item, i) => {
//     lines[i].style.width = item.innerHTML;
// });

//scrolling

const scrolling = (selector) => {
    const upElem = document.querySelector(selector);

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add("animate__animated", "animate__fadeIn");
            upElem.classList.remove("animate__fadeOut");
        } else {
            upElem.classList.add("animate__fadeOut");
            upElem.classList.remove("animate__fadeIn");
        }
    });

    let links = document.querySelectorAll("[href^='#']");
    let speed = 0.2;

    links.forEach(a => {
        a.addEventListener("click", function(e) {
            e.preventDefault();

            let widthTop = document.documentElement.scrollTop;
            let hash = this.hash;
            let toBlock = document.querySelector(hash).getBoundingClientRect().top;
            let start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start;
                let r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r !== widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }

            console.log(this.hash);
        });
    });
};

scrolling(".pageup");







const themeSwitch = document.querySelector(".switch");
const ball = document.querySelector(".switch__ball");
const containers = document.querySelectorAll(".container");

themeSwitch.addEventListener("click", () => {
    ball.classList.toggle("switch__ball-up");
    // containers.forEach(a => {
    //     a.classList.toggle(".darkTheme");
    // })
    toggleTheme()
});

function toggleTheme() { 
    // Obtains an array of all <link> 
    // elements. 
    // Select your element using indexing. 
    const theme = document.getElementsByTagName('link')[1]; 
    
    // Change the value of href attribute  
    // to change the css sheet. 
    if (theme.getAttribute('href') === 'css/light.min.css') { 
        theme.setAttribute('href', 'css/dark.min.css'); 
    } else { 
        theme.setAttribute('href', 'css/light.min.css'); 
    } 
} 