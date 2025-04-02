document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    body.className = savedTheme;
  } else if (prefersDark) {
    body.className = "dark";
  } else {
    body.className = "pastel";
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("pastel");
      localStorage.setItem("theme", "pastel");
    } else {
      body.classList.remove("pastel");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    updateButtonText();
  });

  function updateButtonText() {
    themeToggle.textContent = body.classList.contains("dark") ? "🌞" : "🌙";
  }

  updateButtonText();

  // Optional: Watch for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        body.className = e.matches ? "dark" : "pastel";
        updateButtonText();
      }
    });
});
