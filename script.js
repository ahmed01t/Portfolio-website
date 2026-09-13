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
