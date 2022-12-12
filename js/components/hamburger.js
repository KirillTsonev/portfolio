function hamburger() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const closeElem = document.querySelector(".menu__close");
    const overlay = document.querySelector(".menu__overlay")

    hamburger.addEventListener("click", () => {
        menu.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    closeElem.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = "";
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = "";
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && menu.classList.contains("active")) {
            menu.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

export default hamburger