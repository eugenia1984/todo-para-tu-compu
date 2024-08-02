(() => {
  "use strict";

  // For the theme button
  const themeButton = document.getElementById("theme");
  const themeIcon = document.getElementById("light-dark-theme-button");
  const htmlElement = document.querySelector("html");

  // Function to set the theme
  const setTheme = (theme) => {
    if (theme === "dark") {
      htmlElement.setAttribute("data-bs-theme", "dark");
      themeIcon.setAttribute("src", "./assets/svg/sol.svg");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.setAttribute("data-bs-theme", "light");
      themeIcon.setAttribute("src", "./assets/svg/luna.svg");
      localStorage.setItem("theme", "light");
    }
  };

  // Check local storage for theme on load
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    setTheme(storedTheme);
  } else {
    setTheme("light");
  }

  // Theme toggle functionality
  themeButton.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    currentTheme === "light" ? setTheme("dark") : setTheme("light");
  });
})();
