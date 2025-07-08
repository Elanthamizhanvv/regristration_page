// For the login form (login.html)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
      const message = document.getElementById("loginMessage");
      message.classList.remove("d-none"); // Show success message
      message.classList.add("show");
      loginForm.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}

// For the registration form (signup.html)
const regForm = document.getElementById("registrationForm");
if (regForm) {
  regForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    alert("Registration submitted successfully!");
    regForm.reset();
  });
}
