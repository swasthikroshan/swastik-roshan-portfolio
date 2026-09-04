/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// Open / close mobile navigation

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});



/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");


// Check previously saved theme

const savedTheme = localStorage.getItem("theme");


// If dark mode was previously selected

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeIcon.textContent = "☀️";

} else {

    themeIcon.textContent = "🌙";

}



// Toggle Dark / Light Mode

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    const darkMode =
        document.body.classList.contains("dark-mode");


    if (darkMode) {

        // Dark mode

        themeIcon.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        // Light mode

        themeIcon.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});



/* =====================================================
   CURRENT YEAR
===================================================== */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}



/* =====================================================
   SCROLL ANIMATION
===================================================== */

const sections =
    document.querySelectorAll(".section, .hero");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.1
    }

);


// Observe all sections

sections.forEach((section) => {

    observer.observe(section);

});



/* =====================================================
   NAVBAR SHADOW ON SCROLL
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(15, 23, 42, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});