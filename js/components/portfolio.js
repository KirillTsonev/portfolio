function portfolio() {
    ///////////////
    // Variables //
    ///////////////

    const portfolioHeadings = document.querySelectorAll(".slider__heading");
    const portfolioProjects = document.querySelectorAll(".slider__project");
    const inner = document.querySelector(".slider__headings-inner");
    const counter = document.querySelector(".slider__counter");
    const width = 208;
    let slideCount = 1;
    let offset = 0;
    let i = 0;

    inner.style.width = 208 * portfolioHeadings.length + 'px';
    counter.innerHTML = `${i + 1}/${portfolioProjects.length}`

    ///////////////
    // Functions //
    ///////////////

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

    function autoSlides() {
        const autoSlidesInt = setInterval(() => {
            if (screen.width > 1200) {
                i++;
                automaticHeaidng();
                automaticProject();
            }
        }, 3000);

        document.querySelector(".slider__button").addEventListener("click", () => {
            clearInterval(autoSlidesInt);
        });

        portfolioProjects.forEach(a => {
            a.addEventListener("mouseenter", () => {
                clearInterval(autoSlidesInt);   
            });
        })

        document.querySelector(".slider__nav").addEventListener("mouseenter", () => {
            clearInterval(autoSlidesInt);
        });
    }

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

    /////////////////////
    // Event Listeners //
    /////////////////////

    portfolioHeadings.forEach(a => {
        a.addEventListener("click", () => setActiveProject(a));
    })

    document.querySelector(".slider__prev").addEventListener('click', () => {
        prevProject();
    });

    document.querySelector(".slider__next").addEventListener('click', () => {
        nextProject();
    });

    document.querySelector(".slider__nav").addEventListener("mouseleave", () => {
        autoSlides();
    });

    portfolioProjects.forEach(a => {
        a.addEventListener("mouseleave", () => {
            autoSlides();
        });
    })

    document.querySelector(".slider__button").addEventListener("click", () => {
        document.querySelector(".portfolio__container").style.transform = `translateY(-1010px)`;
        document.querySelector(".portfolio").style.height = "1300px";
    });

    document.querySelector(".tiles__button").addEventListener("click", () => {
        document.querySelector(".portfolio__container").style.transform = `translateY(0px)`;
        document.querySelector(".portfolio").style.height = "1060px";
    });

    document.querySelector(".tiles__button").addEventListener("click", () => {
        autoSlides();
    });

    document.querySelectorAll(".tiles__card-inner").forEach(a => {
        a.addEventListener("mouseenter", () => {
            a.style.transform = `translateX(-261px)`;
        });
    })

    document.querySelectorAll(".tiles__card-inner").forEach(a => {
        a.addEventListener("mouseleave", () => {
            a.style.transform = `translateX(0px)`;
        });
    })

    ////////////////////
    // Function Calls //
    ////////////////////

    autoSlides();
}

export default portfolio;