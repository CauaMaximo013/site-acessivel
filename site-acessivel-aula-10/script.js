// efeito parallax
document.addEventListener("scroll", () => {
  const layers = document.querySelectorAll(".layer img");
  let scrollTop = window.pageYOffset;

  layers.forEach((layer) => {
    let speed = 0.3;
    layer.style.transform = `translateY(${scrollTop * speed}px) scale(1.2)`;
  });
});

// Abrir/fechar painel de configurações
const configToggle = document.getElementById("configToggle");
const configPanel = document.getElementById("configPanel");

configToggle.addEventListener("click", () => {
  configPanel.style.display =
    configPanel.style.display === "flex" ? "none" : "flex";
});

// Alternar tema claro/escuro
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

// Zoom
let scale = 1;
const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const zoomResetBtn = document.getElementById("zoomReset");

zoomInBtn.addEventListener("click", () => {
  scale += 0.1;
  document.body.style.transform = `scale(${scale})`;
  document.body.style.transformOrigin = "top center";
});

zoomOutBtn.addEventListener("click", () => {
  scale -= 0.1;
  if (scale < 0.5) scale = 0.5;
  document.body.style.transform = `scale(${scale})`;
  document.body.style.transformOrigin = "top center";
});

zoomResetBtn.addEventListener("click", () => {
  scale = 1;
  document.body.style.transform = "scale(1)";
});
