// Header Start
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li")

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
// Header End
