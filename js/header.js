document.addEventListener("DOMContentLoaded", () => {
 
  const navLinksWithDropdown = document.querySelectorAll("nav ul li a:not(:only-child)");

  navLinksWithDropdown.forEach((link) => {
    link.addEventListener("click", (e) => {
      const dropdown = link.nextElementSibling;
      if (dropdown && dropdown.classList.contains("nav-dropdown")) {
        const isVisible = dropdown.style.display === "block";
        document.querySelectorAll(".dropdown").forEach((dir) => {
          dir.style.display = "none";
        });
        dropdown.style.display = isVisible ? "none" : "block";
      }

      e.stopPropagation();
    });
  });
  document.documentElement.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.style.display = "none";
    });
  });
  const navToggle = document.getElementById("nav-toggle");
  const navUl = document.querySelector("nav ul");

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      if (navUl.style.display === "block") {
        navUl.style.display = "none";
      } else {
        navUl.style.display = "block";
      }
    });
  }
});