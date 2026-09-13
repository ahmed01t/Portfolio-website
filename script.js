function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been sent.");

    document.querySelector(".contact-form").reset();
}

// 1. Scroll smoothly to top of page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// 2. Toggle dark mode theme on the website
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
        themeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    }
}

// 3. Update copyright year automatically in footer
function updateCopyrightYear() {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Run updateCopyrightYear when DOM is ready
document.addEventListener("DOMContentLoaded", updateCopyrightYear);

