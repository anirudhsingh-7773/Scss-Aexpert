document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownIcon = document.querySelector(".dropdown i");
  const hamburgerMenu = document.querySelector(".header__toggle");

  // Toggle navbar and dropdown icon
  dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
    hamburgerMenu.classList.toggle("show");

    dropdownIcon.classList.toggle("fa-bars");
    dropdownIcon.classList.toggle("fa-xmark");
  });

  // Close navbar when clicking outside of .header__toggle
  document.addEventListener("click", function (event) {
    const ClickInsideMenu = hamburgerMenu.contains(event.target);
    const ClickOnDropdown = dropdown.contains(event.target);

    if (!ClickInsideMenu && !ClickOnDropdown) {
      hamburgerMenu.classList.remove("show");

      dropdownIcon.classList.add("fa-bars");
      dropdownIcon.classList.remove("fa-xmark");
    }
  });
});
