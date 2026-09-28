// =====================================================
// ROHIT HADLAGERI - PORTFOLIO LINKS
// =====================================================

const LINKS = {

    // Email
    email: "mailto:rohitahece2026@gmail.com",

    // GitHub profile
    github: "https://github.com/rohitahece2026-cpu",

    // LinkedIn profile
    linkedin: "https://www.linkedin.com/in/rohit-hadalageri-61584425/",

    // Resume
    resume: "assets/Rohit Hadlageri CV (23-09).pdf",

    // Project repositories
    // Add your actual repository URLs when available.
    shaale: "https://github.com/rohitahece2026-cpu/Shaale-Vikas",

};


// =====================================================
// APPLY LINKS TO HTML ELEMENTS
// =====================================================

document.querySelectorAll("[data-link]").forEach(element => {

    const linkName = element.dataset.link;

    const url = LINKS[linkName];


    // If no URL is provided,
    // remove the link from the page.
    if (!url) {

        element.remove();

        return;

    }


    // Apply URL
    element.href = url;


    // Open external links in a new tab
    if (url.startsWith("http")) {

        element.target = "_blank";

        element.rel = "noopener noreferrer";

    }


    // Email links open the email application
    if (url.startsWith("mailto:")) {

        element.target = "_self";

    }


});


// =====================================================
// AUTOMATIC COPYRIGHT YEAR
// =====================================================

document.querySelectorAll(".yr").forEach(element => {

    element.textContent = new Date().getFullYear();

});