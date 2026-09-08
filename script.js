document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // REGISTER FORM SUBMIT
    // ===============================
    const form = document.getElementById("registerForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = form.querySelector('input[type="text"]').value.trim();
            const phone = form.querySelector('input[type="tel"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();

            if (!name || !phone || !email) {
                alert("Please fill all fields");
                return;
            }

            alert("Registration Submitted Successfully!");
            form.reset();
        });
    }


    // ===============================
    // SCROLL ANIMATION (BEST METHOD)
    // ===============================
    const sections = document.querySelectorAll(".section");

    function revealSections() {
        const triggerBottom = window.innerHeight - 100;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // run once on load


    // ===============================
    // ACTIVE NAV MENU
    // ===============================
    const navLinks = document.querySelectorAll("nav a");

    function setActiveMenu() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveMenu);


    // ===============================
    // SMOOTH SCROLL (NAV CLICK)
    // ===============================
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                e.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
            }
        });
    });


    // ===============================
    // SOCIAL LINKS SAFE OPEN
    // ===============================
    document.querySelectorAll(
        'a[href*="wa.me"], a[href*="instagram.com"], a[href*="linkedin.com"]'
    ).forEach(link => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });

});