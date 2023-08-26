const signupForm = document.getElementById("signup-form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user input
  const name = signupForm.elements["name"].value;
  const email = signupForm.elements["email"].value;
  const password = signupForm.elements["password"].value;
  const confirmPassword = signupForm.elements["confirmPassword"].value;

  // Validate user input
  if (name && email && password && confirmPassword) {
    if (password === confirmPassword) {
      // Generate random access token
      const accessToken = generateRandomToken();

      // Create user state object
      const userState = {
        name,
        email,
        password,
        accessToken
      };

      // Save user state to local storage
      localStorage.setItem("userState", JSON.stringify(userState));

      // Show success message
      successMessage.textContent = "Signup successful! Redirecting to profile...";
      errorMessage.textContent = "";

      // Redirect to profile page
      setTimeout(() => {
        window.location.href = "profile.html";
      }, 2000);
    } else {
      errorMessage.textContent = "Passwords do not match !";
      successMessage.textContent = "";
    }
  } else {
    errorMessage.textContent = "Error : All fields are mandatory.";
    successMessage.textContent = "";
  }
});


function generateRandomToken() {
  // Generate a random 16-byte string (not cryptographically secure)
  return Math.random().toString(36).substring(2, 18);
}
