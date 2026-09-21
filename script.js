/* =====================================================
   PERSONAL PORTFOLIO
   JAVASCRIPT
===================================================== */


/* =====================================================
   1. MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const navbar =
    document.querySelector(".navbar");

const navLinks =
    document.querySelectorAll(".nav-list a");


if (menuToggle && navbar) {

    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                navbar.classList.toggle("active");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );


            if (isOpen) {

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-xmark"></i>';

            } else {

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        }
    );


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navbar.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );


                    menuToggle.innerHTML =
                        '<i class="fa-solid fa-bars"></i>';

                }
            );

        }
    );

}


/* =====================================================
   2. HERO TYPING EFFECT
===================================================== */

const typingText =
    document.querySelector("#typing-text");


const roles = [

    "Web Developer",

    "Frontend Developer",

    "HTML & CSS Developer",

    "JavaScript Developer"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingEffect() {

    if (!typingText) {

        return;

    }


    const currentRole =
        roles[roleIndex];


    if (deleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }


    typingText.textContent =
        currentRole.substring(
            0,
            characterIndex
        );


    let speed =
        deleting
            ? 60
            : 100;


    if (
        !deleting &&
        characterIndex === currentRole.length
    ) {

        speed = 1500;

        deleting = true;

    }


    else if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        roleIndex++;

        if (
            roleIndex >= roles.length
        ) {

            roleIndex = 0;

        }

        speed = 500;

    }


    setTimeout(
        typingEffect,
        speed
    );

}


typingEffect();


/* =====================================================
   3. HEADER SCROLL EFFECT
===================================================== */

const header =
    document.querySelector(".header");


function updateHeader() {

    if (!header) {

        return;

    }


    if (window.scrollY > 50) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();


/* =====================================================
   4. ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


function updateActiveNavigation() {

    let currentSection = "home";


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop - 180;


            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.id;

            }

        }
    );


    navLinks.forEach(
        function (link) {

            const href =
                link.getAttribute("href");


            link.classList.remove(
                "active"
            );


            if (
                href ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* =====================================================
   5. SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".skill-card, " +
        ".service-card, " +
        ".project-card, " +
        ".contact-content"
    );


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "show"
            );

        }
    );

}


/* =====================================================
   6. CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector(
        "#contact-form"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nameInput =
                document.querySelector("#name");


            const emailInput =
                document.querySelector("#email");


            const subjectInput =
                document.querySelector("#subject");


            const messageInput =
                document.querySelector("#message");


            const name =
                nameInput.value.trim();


            const email =
                emailInput.value.trim();


            const subject =
                subjectInput.value.trim();


            const message =
                messageInput.value.trim();


            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;

            }


            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );


            contactForm.reset();

        }
    );

}


/* =====================================================
   7. PROJECT LINKS
===================================================== */

const projectLinks =
    document.querySelectorAll(
        ".project-link"
    );


projectLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const linkAddress =
                    link.getAttribute("href");


                if (
                    !linkAddress ||
                    linkAddress === "#"
                ) {

                    event.preventDefault();

                    alert(
                        "Project link will be added soon."
                    );

                }

            }
        );

    }
);


/* =====================================================
   8. CV DOWNLOAD
===================================================== */

const cvButton =
    document.querySelector(
        'a[download]'
    );


if (cvButton) {

    cvButton.addEventListener(
        "click",
        function () {

            console.log(
                "CV download started."
            );

        }
    );

}


/* =====================================================
   9. CURRENT YEAR
===================================================== */

const copyright =
    document.querySelector(
        "#copyright"
    );


if (copyright) {

    const currentYear =
        new Date().getFullYear();


    copyright.innerHTML =
        `&copy; ${currentYear} Fady Moussa Mozley FMR.
        All Rights Reserved.`;

}


/* =====================================================
   10. BACK TO TOP
===================================================== */

const backToTop =
    document.createElement(
        "button"
    );


backToTop.type =
    "button";


backToTop.className =
    "back-to-top";


backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


backToTop.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';


document.body.appendChild(
    backToTop
);


function updateBackToTop() {

    if (
        window.scrollY > 500
    ) {

        backToTop.classList.add(
            "show"
        );

    } else {

        backToTop.classList.remove(
            "show"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop
);


updateBackToTop();


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);