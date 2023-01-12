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
        });
    });
};

export default scrolling