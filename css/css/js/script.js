// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

    console.log("Zomato website loaded successfully!");

});


// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.background = "rgba(170, 0, 0, 0.95)";
        header.style.position = "fixed";
        header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        header.style.transition = "0.4s ease";

    } else {

        header.style.background = "transparent";
        header.style.position = "absolute";
        header.style.boxShadow = "none";

    }

});


// =========================
// LOGO HOVER ANIMATION
// =========================

const mainLogo = document.querySelector("main > img");

mainLogo.addEventListener("mouseenter", function () {

    mainLogo.style.transform = "scale(1.08)";
    mainLogo.style.transition = "0.3s ease";

});

mainLogo.addEventListener("mouseleave", function () {

    mainLogo.style.transform = "scale(1)";

});


// =========================
// NAVIGATION CLICK EFFECT
// =========================

const navLinks = document.querySelectorAll("header ul li a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        alert("This feature will be available soon!");

    });

});


// =========================
// PARALLAX EFFECT
// =========================

window.addEventListener("mousemove", function (event) {

    const x = (window.innerWidth / 2 - event.clientX) / 50;
    const y = (window.innerHeight / 2 - event.clientY) / 50;

    mainLogo.style.transform =
        `translate(${x}px, ${y}px)`;

});