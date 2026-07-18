document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("header, section");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Smooth navigation active class highlight switcher
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 240) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Card click behavior tracker
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const dishName = card.querySelector("h3").textContent;
      console.log(`Exploring deep menu item details for: ${dishName}`);
    });
  });
});
