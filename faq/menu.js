// Get DOM elements
const menuIcon = document.getElementById("menuIcon");            // Menu image icon
const mobileSidebar = document.getElementById("mobileSidebar");  // Sidebar container
const closeSidebarBtn = document.getElementById("closeSidebar"); // × button
const mobileOverlay = document.getElementById("mobileOverlay");  // Overlay background

// Function to open sidebar
function openSidebar() {
  mobileSidebar.classList.add("active");
  mobileOverlay.classList.add("active");
}

// Function to close sidebar
function closeSidebar() {
  mobileSidebar.classList.remove("active");
  mobileOverlay.classList.remove("active");
}

// Add event listeners
if (menuIcon && mobileSidebar && closeSidebarBtn && mobileOverlay) {
  menuIcon.addEventListener("click", openSidebar);
  closeSidebarBtn.addEventListener("click", closeSidebar);
  mobileOverlay.addEventListener("click", closeSidebar);
}
