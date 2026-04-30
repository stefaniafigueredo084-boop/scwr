const Producto = document.getElementById("Producto2");

const abajo1 = document.getElementById("abajo1");

Producto.addEventListener("mouseenter", () => {
  abajo1.classList.add("aparecer-menu");
});

Producto.addEventListener("mouseout", () => {
  abajo1.classList.remove("producto");
});
