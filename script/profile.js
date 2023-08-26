const profileInfo = document.getElementById("profile-info");
const logoutButton = document.getElementById("logout-button");

// Check if user state exists in local storage
const userState = JSON.parse(localStorage.getItem("userState"));
if (!userState || !userState.accessToken) {
  // Redirect to signup page
  window.location.href = "index.html";
} else {
  // Display user's details
  const userInfo = `
    <h2>Name: <span class="profile-info-value"> ${userState.name} </span></h2>
    
    <h2>Email: <span class="profile-info-value">${userState.email} </span> </h2>
    
    <h2>Password: <span class="profile-info-value">${userState.password} </span> </h2>
  `;
  profileInfo.innerHTML = userInfo;

}

logoutButton.addEventListener("click", function () {
  // Clear user state from local storage
  localStorage.removeItem("userState");

  // Redirect to signup page
  window.location.href = "index.html";
});
