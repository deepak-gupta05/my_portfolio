const scrollToUp = document.querySelector("#scroll-up");
const bars = document.querySelector("#bars");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navlink = document.querySelectorAll(".nav-link");

scrollToUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

bars.addEventListener("click", function () {
    ul.classList.toggle("show");
});

navlink.forEach((link) => {
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
});