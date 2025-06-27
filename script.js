// script.js
document.addEventListener("DOMContentLoaded", () => {
 
  /* botao para voltar */
  const topBtn = document.createElement("button");
  topBtn.setAttribute("aria-label", "Voltar ao topo");
  topBtn.textContent = "↑";
  topBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 0.5rem 0.8rem;
    border: none;
    border-radius: 50%;
    background: var(--primary);
    color: #fff;
    font-size: 1.25rem;
    box-shadow: 0 4px 8px rgba(0,0,0,.2);
    cursor: pointer;
    display: none;
    transition: transform .2s;
  `;

  topBtn.addEventListener("mouseenter", () => (topBtn.style.transform = "scale(1.1)"));
  topBtn.addEventListener("mouseleave", () => (topBtn.style.transform = "scale(1)"));
  topBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 100 ? "block" : "none";
  });
});
