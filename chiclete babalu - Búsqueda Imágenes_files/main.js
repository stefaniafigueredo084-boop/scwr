const dni = prompt("ingresa DNI");
if (dni.length < 7) {
  alert("acceso denegado");
} else if (dni.length > 8) {
  alert("acceso permitido");
}

const nombre = prompt("ingrese nombre de ususario");
alert("hola" + " " + nombre);
if (nombre.length < 5) {
  alert("acceso denegado");
} else if (nombre.length > 9) {
  alert("acceso permitido");
}

const apellido = prompt("ingrese su apellido");
alert("hola" + " " + nombre - apellido);
if (apellido.length < 7) {
  alert("acceso denegado");
} else if (apellido.length > 20) {
  alert("acceso permitido");
}

const email = prompt("ingrese su email");
alert("acceso permitido");

const edad = 18;
if (edad > 18 && edad < 120) {
  alert("PODES ENTRAR");
} else if (edad < 18) {
} else if (edad < 18) {
}
