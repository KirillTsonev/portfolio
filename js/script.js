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

            console.log(this.hash)
        });
    });
};

// portfolioProjects.forEach(a => {
//     if ([...portfolioProjects].indexOf(a) === index) {
//         console.log([...portfolioProjects].indexOf(a) === index)
//         // a.classList.add("active")
//     }
// })

//headings

const portfolioHeadings = document.querySelectorAll(".portfolio__heading");
const portfolioProjects = document.querySelectorAll(".portfolio__project");

function setActiveProject(a) {
    const index = [...portfolioHeadings].indexOf(a);

    portfolioProjects.forEach(a => {
        a.classList.remove("active");
        
        if ([...portfolioProjects].indexOf(a) === index) {
            a.classList.add("active");
        }
    })
}

portfolioHeadings.forEach(a => {
    a.addEventListener("click", () => setActiveProject(a));
})

scrolling(".pageup");

//slider
const inner = document.querySelector(".portfolio__headings-inner")
const prev = document.querySelector(".portfolio__prev");
const next = document.querySelector(".portfolio__next");
const headings = document.querySelectorAll(".portfolio__heading")
let slideCount = 0;
let offset = 0;
let width = 208;

inner.style.width = 208 * headings.length + 'px';

next.addEventListener('click', () => {
    if (offset === (width * (headings.length - 5))) {
        offset = 0;
    } else {
        offset += width; 
    }

    inner.style.transform = `translateX(-${offset}px)`;

    if (slideCount === headings.length) {
        slideCount = 1;
    } else {
        slideCount++;
    }
});

prev.addEventListener('click', () => {
    if (offset === 0) {
        offset = width * (headings.length - 5);
    } else {
        offset -= width;
    }

    inner.style.transform = `translateX(-${offset}px)`;

    if (slideCount === 1) {
        slideCount = headings.length;
    } else {
        slideCount--;
    }
});