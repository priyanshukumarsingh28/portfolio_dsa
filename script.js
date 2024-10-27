// Toggle Dark Mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = 
        document.body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
});

// Contact Form Validation
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting
    const email = document.getElementById("email").value;

    if (email === "") {
        contactMessage.textContent = "Please enter a valid email address.";
    } else {
        contactMessage.textContent = "Thank you for reaching out!";
    }
});
