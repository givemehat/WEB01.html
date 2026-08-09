// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Form validation and submission
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Add a simple loading state to button
  const btn = form.querySelector("button");
  const originalText = btn.innerHTML;
  btn.innerHTML = "Sending...";
  btn.style.opacity = "0.7";

  setTimeout(() => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      btn.innerHTML = originalText;
      btn.style.opacity = "1";
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      btn.innerHTML = originalText;
      btn.style.opacity = "1";
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", { name, email, message });
    alert("Thank you! Your message has been sent successfully.");
    form.reset();

    btn.innerHTML = originalText;
    btn.style.opacity = "1";
  }, 800); // Simulated network delay
});
