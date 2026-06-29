/* ==========================================
   PARTICLES BACKGROUND
========================================== */

particlesJS("particles-js", {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: "#B68D65"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 3
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#C8A27A",
            opacity: 0.35,
            width: 1
        },

        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },

    interactivity: {
        detect_on: "canvas",

        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }
        },

        modes: {

            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.7
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true
});



/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "flex";

    }

    else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ==========================================
   ACTIVE NAVBAR LINK
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* ==========================================
   NAVBAR SHADOW
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

    }

    else {

        navbar.style.boxShadow = "none";

    }

});



/* ==========================================
   CERTIFICATE POPUP
========================================== */

function openCertificate(image, title) {

    document.getElementById("certificateModal").style.display = "flex";

    document.getElementById("certificateImage").src = image;

    document.getElementById("certificateTitle").innerText = title;

}

function closeCertificate() {

    document.getElementById("certificateModal").style.display = "none";

}

window.onclick = function (event) {

    const modal = document.getElementById("certificateModal");

    if (event.target === modal) {

        closeCertificate();

    }

};

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeCertificate();

    }

});



/* ==========================================
   SCROLL REVEAL
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});



/* ==========================================
   HERO BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});



/* ==========================================
   TYPING EFFECT
========================================== */

const typingElement = document.querySelector(".hero h2");

if (typingElement) {

    const words = [

        "Aspiring AI Engineer",

        "Machine Learning Enthusiast",

        "Data Science Student",

        "Python Developer",

        "Future Software Engineer"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        }

        else {

            typingElement.textContent = currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(typeEffect, deleting ? 50 : 100);

    }

    typeEffect();

}