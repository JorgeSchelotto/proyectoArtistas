var infancias = document.getElementById("textoInfancias");
var niño = document.getElementById("niño");
var todas = document.getElementById("todas");

infancias.setAttribute("hidden", true);
// Oculta texto al cargar
document.addEventListener("load", () => {
  infancias.setAttribute("hidden", true);
});

// Muestra texto
niño.addEventListener("click", () => {
  infancias.removeAttribute("hidden");
});

// Mustra texto al clikear boton
todas.addEventListener("click", () => {
  infancias.setAttribute("hidden", true);
});
