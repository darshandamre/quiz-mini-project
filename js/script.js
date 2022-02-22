const toggleBtn = document.querySelector(".toggle-theme");
const themeIcon = document.querySelector(".toggle-theme > i");
const userPreferenceTheme = localStorage.getItem("theme");

const enableLightMode = () => {
  document.body.classList.toggle("light-mode");
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
  localStorage.setItem("theme", "light-mode");
};

const enableDarkMode = () => {
  document.body.classList.toggle("light-mode");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
  localStorage.setItem("theme", "dark-mode");
};

if (userPreferenceTheme === "light-mode") {
  enableLightMode();
}

toggleBtn.addEventListener("click", () => {
  console.log(themeIcon.classList.contains("fa-sun"));
  if (themeIcon.classList.contains("fa-sun")) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});
