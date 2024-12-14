const form = document.getElementById("contact-form");
const thankYouMessage = document.getElementById("thank-you");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Simple form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        // Display thank you message
        thankYouMessage.style.display = "block";
        form.reset();
    } else {
        alert("Please fill in all fields.");
    }
});
