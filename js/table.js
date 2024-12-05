document.addEventListener("DOMContentLoaded", () => {
    const tableToggle = document.getElementById("table-toggle");
    const tableChildren = document.getElementById("table-children");
    const mainContent = document.getElementById("main-content");
  
    // Toggle child links visibility
    tableToggle.addEventListener("click", () => {
      tableChildren.classList.toggle("hidden");
    });
  
    // Handle clicks on child links
    tableChildren.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        const content = e.target.dataset.content;
        updateMainContent(content);
      }
    });
  
    // Update main content area dynamically
    function updateMainContent(content) {
      if (content === "about") {
        mainContent.innerHTML = `
          <h3 class="text-xl font-bold mb-4">About Section</h3>
          <div class="bg-white shadow rounded p-4">
            <p>This is the About section dynamically loaded.</p>
          </div>`;
      } else if (content === "success") {
        mainContent.innerHTML = `
          <h3 class="text-xl font-bold mb-4">Success Section</h3>
          <div class="bg-white shadow rounded p-4">
            <p>This is the Success section dynamically loaded.</p>
          </div>`;
      }
    }
  });
  