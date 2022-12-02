function hamburger() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const closeElem = document.querySelector(".menu__close");
    const overlay = document.querySelector(".menu__overlay")

    hamburger.addEventListener("click", () => {
        menu.classList.add("active");
    });

    closeElem.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    });
}

export default hamburger