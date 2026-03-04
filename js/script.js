
const hamMenu = document.getElementById("ham-menu")
const headerNavLinks = document.getElementById("header-nav-links")

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    headerNavLinks.classList.toggle("active");
});