 // Example: add smooth fade-in animation when sections load
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec, i) => {
    sec.style.opacity = 0;
    setTimeout(() => {
      sec.style.transition = "opacity 1s ease";
      sec.style.opacity = 1;
    }, i * 500); // staggered fade-in
  });
});
