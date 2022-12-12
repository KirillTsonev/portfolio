function themes() {
    const themeSwitch = document.querySelectorAll(".switch");
    const ball = document.querySelectorAll(".switch__ball");
    const rootElem = document.documentElement;
    let dataTheme;
    let newTheme;

    if (localStorage.getItem("newTheme") === "dark" && localStorage.getItem("newTheme")) {
        newTheme = "dark";
        rootElem.setAttribute("data-theme", newTheme);
        ball.forEach(a => {
            a.classList.add("switch__ball-up");
        })
    } else {
        newTheme = "light";
        rootElem.setAttribute("data-theme", newTheme);
        ball.forEach(a => {
            a.classList.remove("switch__ball-up");
        })
    }    

    function toggleTheme() { 
        dataTheme = rootElem.getAttribute("data-theme");
        newTheme = (dataTheme === "light" ? "dark" : "light");
        localStorage.setItem("newTheme", newTheme);
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