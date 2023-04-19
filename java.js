const btnCart = document.querySelector('.container-juego-icon');
const containerCartProducts = document.querySelector(
	'.container-juego-products'
);

btnCart.addEventListener('click', () => {
	containerJuegoProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.juego-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
                <div class="info-juego-product">
                    <span class="cantidad-juego-carrito">${product.quantity}</span>
                        <p class="titulo-producto-carrito"> ${product.title}</p> 
                            <span class="precio-producto-carrito">${product.price}</span>
                                </div>
                                  <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                       fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                           stroke="currentColor"
                                            class="icon-close">
                                          <path
                                   stroke-linecap="round"
                                   stroke-linejoin="round"
                                   d="M6 18L18 6M6 6l12 12"/>
                                </svg> `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};

//....................................................//

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



