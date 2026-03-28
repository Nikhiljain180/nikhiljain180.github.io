(function () {
  function updateToggleIcons(isLight) {
    var moon = document.querySelector(".icon-moon");
    var sun = document.querySelector(".icon-sun");
    if (moon && sun) {
      moon.style.display = isLight ? "none" : "block";
      sun.style.display = isLight ? "block" : "none";
    }
  }

  function toggleTheme() {
    var html = document.documentElement;
    var isLight = html.classList.toggle("light");
    updateToggleIcons(isLight);
    try {
      sessionStorage.setItem("theme", isLight ? "light" : "dark");
    } catch (e) {}
  }

  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  try {
    if (sessionStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light");
      updateToggleIcons(true);
    }
  } catch (e) {}

  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (navLinks) navLinks.classList.remove("active");
    });
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in").forEach(function (el) {
    observer.observe(el);
  });
})();
