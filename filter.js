const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

// Default filter on page load
window.addEventListener("DOMContentLoaded", () => {
  filterPortfolio("projects");

  // Optional: Highlight the "project" button
  filterButtons.forEach(btn => {
    if (btn.getAttribute("data-filter") === "projects") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
});

// Button click handling
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");
    filterPortfolio(filter);

    // Optional: Active button styling
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Filtering function
function filterPortfolio(filter) {
  portfolioItems.forEach(item => {
    if (item.classList.contains(filter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
