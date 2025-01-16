// Clear any existing theme setting
// localStorage.removeItem('theme');

// Simple toggle function
function toggleTheme() {
  console.log("test");
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  //   localStorage.setItem("theme", newTheme);
}

// // Set initial dark theme
// window.onload = function () {
//   // Set dark theme
//   document.documentElement.setAttribute("data-theme", "dark");

//   // Update pageviews
//   let views = localStorage.getItem("pageviews") || 0;
//   views = parseInt(views) + 1;
//   localStorage.setItem("pageviews", views);
//   document.getElementById("pageviews").textContent = views.toLocaleString();

//   // Reduced timeout from 100ms to 50ms
//   setTimeout(() => {
//     document.documentElement.classList.add("ready");
//   }, 50);
// };

document.querySelectorAll(".dropdown-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const dropdown = button.parentElement;
    dropdown.classList.toggle("active");
  });
});
