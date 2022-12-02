function themes() {
    const themeSwitch = document.querySelectorAll(".switch");
    const ball = document.querySelectorAll(".switch__ball");

    function toggleTheme() { 
        const rootElem = document.documentElement;
        let dataTheme = rootElem.getAttribute("data-theme");
        let newTheme = (dataTheme === "light" ? "dark" : "light");

        rootElem.setAttribute("data-theme", newTheme);
    } 

    themeSwitch.forEach(a => {
        a.addEventListener("click", () => {
            ball.forEach(a => {
                a.classList.toggle("switch__ball-up");
            })    
            toggleTheme();
        })   
    });
}

export default themes;