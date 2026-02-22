document.addEventListener("DOMContentLoaded", () => {

    // 🔒 Colapsar todas las secciones al cargar
  document.querySelectorAll(".section-content").forEach(content => {
    content.classList.add("collapsed");

    const btn = content.previousElementSibling.querySelector(".toggle-btn");
    btn.textContent = "+";
  });

  document.querySelectorAll(".section-header").forEach(header => {
   
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const btn = header.querySelector(".toggle-btn");

      const isCollapsed = content.classList.toggle("collapsed");
      btn.textContent = isCollapsed ? "+" : "−";
    });
  });


// Navegación: abrir sección al hacer click
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href");
    const section = document.querySelector(targetId);
    if (!section) return;

    const content = section.querySelector(".section-content");
    const btn = section.querySelector(".toggle-btn");

    content.classList.remove("collapsed");
    btn.textContent = "−";
  });
});
});
