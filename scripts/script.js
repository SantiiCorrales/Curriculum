const fechaFooter = document.getElementById("fecha")
const fecha = new Date().getFullYear();

fechaFooter.innerHTML = fecha;

var coll = document.querySelector(".collapsible");
var content = document.querySelector(".content");

coll.addEventListener("click", function() {
  content.classList.toggle("active");
});