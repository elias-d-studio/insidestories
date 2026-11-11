const toggle = document.getElementById("dark-mode-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        toggle.checked = true;
    } else {
        document.documentElement.classList.remove("dark");
        toggle.checked = false;
    }

    toggle.addEventListener("change", function () {
        if (toggle.checked) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
}

if (menuToggle && navLinks) {
    const closeMenu = () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    };

    menuToggle.addEventListener("click", function () {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        navLinks.classList.toggle("open", !isOpen);
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    });

    navLinks.addEventListener("click", function (event) {
        if (event.target instanceof Element && event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
            closeMenu();
            menuToggle.focus();
        }
    });
}
