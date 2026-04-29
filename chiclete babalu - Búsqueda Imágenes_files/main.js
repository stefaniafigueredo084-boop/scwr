let botonApretar = Document.getElementById("boton-apretar");
const mensaje = document.getElementById(mensaje);

let estadoMensaje = false;
console.log(botonApretar);

botonApretar.addEventListener("click", () => {
  if (estadoMensaje == false) {
    mensaje.textContent = "holaa";
    estadoMensaje = true;
  } else {
    mensaje.textContent = "";
    estadoMensaje = false;
  }
});
