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

            console.log(this.hash)
        });
    });
};

scrolling(".pageup");

//headings

const portfolioHeadings = document.querySelectorAll(".slider__heading");
const portfolioProjects = document.querySelectorAll(".slider__project");
let i = 0;


function setActiveProject(a) {
    i = [...portfolioHeadings].indexOf(a);

    portfolioProjects.forEach(a => {
        a.classList.remove("activeProject");
        
        if ([...portfolioProjects].indexOf(a) === i) {
            a.classList.add("activeProject");
        }
    })

    portfolioHeadings.forEach(a => {
        a.classList.remove("activeHeading");
        
        if ([...portfolioHeadings].indexOf(a) === i) {
            a.classList.add("activeHeading");
        }
    })

    counter.innerHTML = `${i + 1}/${portfolioProjects.length}`
}

portfolioHeadings.forEach(a => {
    a.addEventListener("click", () => setActiveProject(a));
})

//slider

const inner = document.querySelector(".slider__headings-inner");
const prev = document.querySelector(".slider__prev");
const next = document.querySelector(".slider__next");
let slideCount = 1;
let offset = 0;
let width = 208;
const counter = document.querySelector(".slider__counter");

inner.style.width = 208 * portfolioHeadings.length + 'px';

function prevProject() {
    if (offset === 0) {
        offset = width * (portfolioHeadings.length - 5);
    } else {
        offset -= width;
    }

    inner.style.transform = `translateX(-${offset}px)`;

    if (slideCount === 0) {
        slideCount = portfolioHeadings.length - 1;
    } else {
        slideCount--;
    }
}

function nextProject() {
    if (offset === (width * (portfolioHeadings.length - 5))) {
        offset = 0;
    } else {
        offset += width; 
    }

    inner.style.transform = `translateX(-${offset}px)`;

    if (slideCount === portfolioHeadings.length - 1) {
        slideCount = 0;
    } else {
        slideCount++;
    }
}

prev.addEventListener('click', () => {
    prevProject();
});

next.addEventListener('click', () => {
    nextProject();
});

function autoSlides() {
    autoSlidesInt = setInterval(() => {
        i++;
        automaticHeaidng();
        automaticProject();
    }, 3000);
}

autoSlides()

function automaticHeaidng() {
    if (i === portfolioHeadings.length) {
        i = 0;
        slideCount = 0;
    }

    if (i === 0 || i - slideCount === 4) {
        nextProject();
    }

    portfolioHeadings.forEach(a => {
        a.classList.remove("activeHeading");
        
        if ([...portfolioHeadings].indexOf(a) === i) {
            a.classList.add("activeHeading");
        }
    })

    counter.innerHTML = `${i + 1}/${portfolioProjects.length}`
}

function automaticProject() {
    if (i === portfolioHeadings.length) {
        i = 0;
    }

    portfolioProjects.forEach(a => {
        a.classList.remove("activeProject");
        
        if ([...portfolioProjects].indexOf(a) === i) {
            a.classList.add("activeProject");
        }
    })

    counter.innerHTML = `${i + 1}/${portfolioProjects.length}`
}

document.querySelector(".slider__nav").addEventListener("mouseenter", () => {
    clearInterval(autoSlidesInt);
});

document.querySelector(".slider__nav").addEventListener("mouseleave", () => {
    autoSlides();
});

portfolioProjects.forEach(a => {
    a.addEventListener("mouseenter", () => {
        clearInterval(autoSlidesInt);   
    });
})

portfolioProjects.forEach(a => {
    a.addEventListener("mouseleave", () => {
        autoSlides();
    });
})

counter.innerHTML = `${i + 1}/${portfolioProjects.length}`

// 
//
//

const seeAll = document.querySelector(".slider__button");
const seeSlider = document.querySelector(".tiles__button");
const portfolioContainer = document.querySelector(".portfolio__container");
const cards = document.querySelectorAll(".tiles__card-inner");

seeAll.addEventListener("click", () => {
    portfolioContainer.style.transform = `translateY(-950px)`;
    document.querySelector(".portfolio").style.height = "1175px";
    // document.querySelector(".portfolio").style.minHeight = "930px";
    // document.querySelector(".portfolio").overflow = "visible"
});

seeSlider.addEventListener("click", () => {
    portfolioContainer.style.transform = `translateY(0px)`;
    document.querySelector(".portfolio").style.height = "930px";
});

cards.forEach(a => {
    a.addEventListener("mouseenter", () => {
        a.style.transform = `translateX(-261px)`;
    });
})

cards.forEach(a => {
    a.addEventListener("mouseleave", () => {
        a.style.transform = `translateX(0px)`;
    });
})