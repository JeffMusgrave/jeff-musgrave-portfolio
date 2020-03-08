let navLinks = document.getElementById('nav-links');
let navLinksCL = navLinks.classList;
document.querySelector('.menu-btn').addEventListener('click', () => {
    if (navLinksCL.contains("on-load")) {
        navLinksCL.remove("on-load");
        navLinksCL.add("show")

    } else if (navLinksCL.contains("hide")) {
        navLinksCL.remove("hide");
        navLinksCL.add("show")
    } else {
        navLinksCL.add("hide");
        navLinksCL.remove("show");
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
        navLinks.className = " ";
        navLinksCL.add("on-load");
    }
});