let buttsedan = document.querySelector(".btn__sedans");
buttsedan.addEventListener("click", saludte);
let buttsuv = document.querySelector(".btn__suvs");
buttsuv.addEventListener("click", saludte);
let buttluxury = document.querySelector(".btn__luxury");
buttluxury.addEventListener("click", saludte);

function saludte() {
  window.alert("Este Botón Funciona!");
}
