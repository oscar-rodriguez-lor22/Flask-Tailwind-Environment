console.log("Hello from script.js :)");

document
  .getElementById("home-tab-button")
  .addEventListener("click", function () {
    showContent("home-tab-content", "home-tab-button");
  });
document
  .getElementById("projects-tab-button")
  .addEventListener("click", function () {
    showContent("projects-tab-content", "projects-tab-button");
  });
document
  .getElementById("me-tab-button")
  .addEventListener("click", function () {
    showContent("me-tab-content", "me-tab-button");
  });

  document
  .getElementById("projects-link")
  .addEventListener("click", function () {
    showContent("projects-tab-content", "projects-tab-button");
  });
  document
  .getElementById("me-link")
  .addEventListener("click", function () {
    showContent("me-tab-content", "me-tab-button");
  });


function showContent(contentId, tabId) {
    // Hide all content
    document.getElementById("home-tab-content").classList.add("hidden");
    document.getElementById("projects-tab-content").classList.add("hidden");
    document.getElementById("me-tab-content").classList.add("hidden");
    document
      .getElementById("home-tab-button")
      .classList.remove("text-blue-400", "border-blue-400", "border-b-2");
    document
      .getElementById("projects-tab-button")
      .classList.remove("text-blue-400", "border-blue-400", "border-b-2");
    document
      .getElementById("me-tab-button")
      .classList.remove("text-blue-400", "border-blue-400", "border-b-2");
    
    document
    .getElementById(contentId)
    .classList.remove("hidden");
    document
      .getElementById(tabId)
      .classList.add("text-blue-400", "border-blue-400", "border-b-2");
  }