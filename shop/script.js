document.addEventListener("DOMContentLoaded", function () {
  const profileIcon = document.getElementById("profileIcon");
  const dropdown = document.getElementById("dropdown");
  const closeBtn = document.getElementById("closeDropdown");
 
  profileIcon.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent bubbling
    dropdown.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    dropdown.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && e.target !== profileIcon) {
      dropdown.style.display = "none";
    }
  });
});
