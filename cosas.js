
  function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validar que los campos no estén vacíos
    if (!nombre || !correo || !asunto || !mensaje) {
      alert('Por favor complete todos los campos');
      return;
    }

    // Validar el formato del correo electrónico usando una expresión regular
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert('Por favor ingrese un correo electrónico válido');
      return;
    }

    // Si todos los campos son válidos, enviar el formulario
    document.getElementById('myForm').submit();
  }

//--------------------------------------------------------------------//

let carrito = []

let btnAgregar = document.querySelectorAll(".btn-carrito");

btnAgregar.forEach((btn) => {
  btn.addEventListener("click", () => {
    let idProducto = btn.getAttribute("data-id");

    let producto = {
      id: idProducto,
      nombre: btn.previousElementSibling.previousElementSibling.innerText,
      precio: btn.previousElementSibling.innerText,
    };

    carrito.push(producto);
    actualizarCarrito();
  });
});

function actualizarCarrito() {
    let listaCarrito = document.querySelector("#carrito");
    listaCarrito.innerHTML = "";
  
    carrito.forEach((producto) => {
      let itemCarrito = document.createElement("li");
      itemCarrito.innerHTML = `
        <span>${producto.nombre}</span>
        <span>${producto.precio}</span>
      `;
      listaCarrito.appendChild(itemCarrito);
    });
  }
  