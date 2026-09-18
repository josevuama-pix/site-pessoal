document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("chatBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Pequena animação de entrada
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".service-card, .project, .tools").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(15px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(el);
});

const style = document.createElement("style");
style.textContent = ".visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
