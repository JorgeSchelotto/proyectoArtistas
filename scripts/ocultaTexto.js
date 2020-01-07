// Nodos
var infancias = document.getElementById("textoInfancias");
var vidas = document.getElementById("textoVidas");

//BTN
var btnNiño = document.getElementById("niño");
var btnTodas = document.getElementById("todas");
var btnVidas = document.getElementById("vidas");

infancias.setAttribute("hidden", true);
vidas.setAttribute("hidden", true);

// Muestra texto
btnNiño.addEventListener("click", () => {
  infancias.removeAttribute("hidden");
  $(".leer").hide(200);
  $(".leerMas").show();
  $(".mostrarMenos").hide();
});

// Oculta texto al clikear boton
btnTodas.addEventListener("click", () => {
  infancias.setAttribute("hidden", true);
  vidas.setAttribute("hidden", true);
  $(".leer").hide(200);
  $(".leerMas").show();
  $(".mostrarMenos").hide();
});

// Mustra texto al clikear boton
btnVidas.addEventListener("click", () => {
  vidas.removeAttribute("hidden");
  $(".leer").hide(200);
  $(".leerMas").show();
  $(".mostrarMenos").hide();
});

//Oculta texto

$(".leer").fadeToggle(200);

$(".leerMas").click(() => {
  $(".leer").fadeToggle(200);
  $(".leerMas").hide();
  $(".mostrarMenos").show();
});

$(".mostrarMenos").click(() => {
  $(".leer").fadeToggle(200);
  $(".leerMas").show();
  $(".mostrarMenos").hide();
});
