/* Cloudia — small, dependency-free interactions */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close menu when a link is tapped
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // Current year in footer
  var yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Contact / intake form -> friendly success without a backend.
  // If you wire a real action (Formspree/Netlify), the native submit takes over.
  document.querySelectorAll("form[data-demo]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      // Only intercept if no real endpoint is configured.
      var action = form.getAttribute("action") || "";
      if (action.indexOf("http") !== 0) {
        e.preventDefault();
        var note = form.querySelector(".form-result");
        if (note) {
          note.hidden = false;
          note.textContent =
            "Thanks! This form isn't connected to email yet — follow the README " +
            "to plug in Formspree (2 minutes), then it'll send to your inbox.";
        }
        form.reset();
      }
    });
  });
})();
