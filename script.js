// EVENT: Button click to change color
const colorBtn = document.getElementById("colorBtn");
const colorText = document.getElementById("colorText");
const greeting = document.createElement("p");
greeting.id = "greeting";
document.body.insertBefore(greeting, document.body.firstChild);

colorBtn.addEventListener("click", () => {
  const colors = ["red", "green", "blue", "purple"];
  const random = colors[Math.floor(Math.random() * colors.length)];
  colorText.style.color = random;
  localStorage.setItem("preferredColor", random);
  colorText.classList.add("fade-in");
});

// Load stored preferences
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("preferredColor");
  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  const username = localStorage.getItem("username") || "Guest";

  if (savedColor) {
    colorText.style.color = savedColor;
  }

  if (savedDarkMode) {
    document.body.classList.add("dark-mode");
  }

  greeting.textContent = `Welcome back, ${username}!`;
});

// EVENT: Hover effect on colorText
colorText.addEventListener("mouseover", () => {
  colorText.textContent = "You hovered over me!";
});

colorText.addEventListener("mouseout", () => {
  colorText.textContent = "Watch me change color.";
});

// EVENT: Keypress detection
document.addEventListener("keydown", (e) => {
  if (e.key === "h") alert("You pressed 'h'!");
});

// BONUS: Double-click secret
colorText.addEventListener("dblclick", () => {
  alert("You discovered the double-click secret! 🕵️‍♂️");
});

// INTERACTIVE: Simple image gallery
const galleryImages = [
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200/ff7f7f",
  "https://via.placeholder.com/300x200/7fbfff"
];
let currentIndex = 0;
const galleryImage = document.getElementById("galleryImage");
const nextBtn = document.getElementById("nextImage");

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  galleryImage.src = galleryImages[currentIndex];
  galleryImage.classList.add("fade-in");
  setTimeout(() => galleryImage.classList.remove("fade-in"), 800);
});

// INTERACTIVE: Tabs
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabContents.forEach(c => c.classList.add("hidden"));
    const target = document.getElementById(tab.dataset.target);
    target.classList.remove("hidden");
    target.classList.add("fade-in");
  });
});

// FORM VALIDATION
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("signupForm");
const emailFeedback = document.getElementById("emailFeedback");
const passwordFeedback = document.getElementById("passwordFeedback");

email.addEventListener("input", () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailFeedback.textContent = emailPattern.test(email.value) ? "" : "Invalid email format";
});

password.addEventListener("input", () => {
  passwordFeedback.textContent = password.value.length >= 8 ? "" : "Password must be at least 8 characters.";
});

form.addEventListener("submit", (e) => {
  if (!email.value || !password.value || password.value.length < 8) {
    e.preventDefault();
    alert("Please fix the errors before submitting.");
  } else {
    localStorage.setItem("username", email.value);
  }
});

// DARK MODE TOGGLE
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Toggle Dark Mode";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});
