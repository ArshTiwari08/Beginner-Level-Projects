// Select Elements
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

// Input Fields
const nameInput = inputs[0];
const emailInput = inputs[1];
const passwordInput = inputs[2];

// Button Event
button.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Empty Field Validation
    if (name === "" || email === "" || password === "") {
        alert("Please fill all the fields.");
        return;
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email.");
        return;
    }

    // Password Validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Success Message
    alert(`Welcome ${name}! Login Successful.`);
});