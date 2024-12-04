// Toggle visibility of sections
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".toggle");
  
    toggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        const section = e.target.nextElementSibling;
        section.style.display = section.style.display === "none" ? "block" : "none";
      });
    });
  });
  
  // Display the current year and last modified date
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
  