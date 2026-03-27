document.addEventListener("DOMContentLoaded", () => {
  const navLinksWithDropdown = document.querySelectorAll("nav ul li a:not(:only-child)");

  navLinksWithDropdown.forEach((link) => {
    link.addEventListener("click", (e) => {
      const dropdown = link.nextElementSibling;
      
      if (dropdown && dropdown.classList.contains("nav-dropdown")) {
        const isVisible = dropdown.style.display === "block";
        document.querySelectorAll(".nav-dropdown").forEach((dir) => {
          dir.style.display = "none";
        });
        const searchDropdown = document.getElementById("search-dropdown");
        if (searchDropdown) {
          searchDropdown.classList.remove("show-search");
        }
        dropdown.style.display = isVisible ? "none" : "block";
      }
      e.stopPropagation();
    });
  });
  const navToggle = document.getElementById("nav-toggle");
  const navUl = document.querySelector("nav ul");

  if (navToggle && navUl) {
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      this.classList.toggle("active");
      navUl.classList.toggle("show-menu");
    });
    navUl.addEventListener("click", (e) => {
        e.stopPropagation();
    });
  }
  const searchToggle = document.getElementById("search-toggle");
  const searchDropdown = document.getElementById("search-dropdown");

  if (searchToggle && searchDropdown) {
    searchToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll(".nav-dropdown").forEach((dir) => {
        dir.style.display = "none";
      });
      searchDropdown.classList.toggle("show-search");
      if (searchDropdown.classList.contains("show-search")) {
          const input = searchDropdown.querySelector("input");
          if (input) input.focus();
      }
    });
    searchDropdown.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
  document.documentElement.addEventListener("click", () => {
    document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
      dropdown.style.display = "none";
    });
    if (searchDropdown) {
       searchDropdown.classList.remove("show-search");
    }
    if (navUl && navUl.classList.contains("show-menu") && navToggle) {
        navUl.classList.remove("show-menu");
        navToggle.classList.remove("active");
    }
  });

});