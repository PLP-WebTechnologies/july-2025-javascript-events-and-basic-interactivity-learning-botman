// ========== Feature 1: Toggle Light/Dark Theme ==========
const toggleButton = document.getElementById("themeToggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.textContent = 
    document.body.classList.contains("dark-mode") 
    ? "Switch to Light Mode" 
    : "Toggle Light/Dark Mode";
});

// ========== Feature 2: Counter Button ==========
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// ========== Feature 3: Custom Form Validation ==========
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Clear previous messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  // Grab form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let isValid = true;

  // Validate name (must not be empty)
  if (name === "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    isValid = false;
  }

  // Validate email (simple regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Validate password (min 6 characters)
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Final validation result
  if (isValid) {
    document.getElementById("successMsg").textContent = "Form submitted successfully! Mahadsanid.";
    this.reset();
  }
});
