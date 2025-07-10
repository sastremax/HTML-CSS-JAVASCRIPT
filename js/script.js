document.addEventListener("DOMContentLoaded", () => {
    let botonesCarrito = document.querySelectorAll(".add-to-cart")

    function actualizarContadorCarrito() {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []
        let contador = document.getElementById("contador-carrito")
        if (contador) {
            contador.textContent = carrito.length
        }
    }

    function animarCarrito() {
        let carritoIcono = document.getElementById("carrito-info")
        if (carritoIcono) {
            carritoIcono.classList.add("animado")
            setTimeout(() => {
                carritoIcono.classList.remove("animado")
            }, 300)
        }
    }

    function agregarProductoCarrito(nuevoProducto) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []

        let productoExistente = carrito.find(p => p.id == nuevoProducto.id)

        if (productoExistente) {
            productoExistente.cantidad += 1
        } else {
            nuevoProducto.cantidad = 1
            carrito.push(nuevoProducto)
        }

        localStorage.setItem("carrito", JSON.stringify(carrito))
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
        actualizarContadorCarrito()
        animarCarrito()
        alert("Producto añadido al carrito")
    }

    botonesCarrito.forEach(boton => {
        boton.addEventListener("click", () => {
            let producto = {
                id: boton.getAttribute("data-id"),
                nombre: boton.getAttribute("data-nombre"),
                precio: parseFloat(boton.getAttribute("data-precio")),
                cantidad: 1
            }
            agregarProductoCarrito(producto)
        })
    })

    fetch("https://fakestoreapi.com/products/category/electronics")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            let contenedorAPI = document.getElementById("productos-api")
            if (contenedorAPI) {
                data.forEach(producto => {
                    let tarjeta = document.createElement("div")
                    tarjeta.classList.add("product-card")
                    tarjeta.innerHTML = `
    <img src="${producto.image}" alt="${producto.title}" class="product-image">
    <h3>
        ${producto.title}
    </h3>
    <p class="price">
        $${producto.price}
    </p>
    <button class="add-to-cart" data-id="${producto.id}" data-nombre="${producto.title}" data-precio="${producto.price}">
        Añadir al carrito
    </button>
    `
                    contenedorAPI.appendChild(tarjeta)
                })

                document.querySelectorAll("#productos-api .add-to-cart").forEach(boton => {
                    boton.addEventListener("click", () => {
                        let producto = {
                            id: boton.getAttribute("data-id"),
                            nombre: boton.getAttribute("data-nombre"),
                            precio: parseFloat(boton.getAttribute("data-precio")),
                            cantidad: 1
                        }
                        agregarProductoCarrito(producto)
                    })
                })
            }
        })
        .catch(error => {
            console.error("Error en la comunicación con la API:", error)
            let contenedor = document.getElementById("productos-api")
            if (contenedor) {
                contenedor.innerHTML = "<p>Hubo un problema al cargar los productos.</p>"
            }
        })

    actualizarContadorCarrito()

    let botonAgregar = document.getElementById("agregarElemento")
    let lista = document.getElementById("listaDinamica")

    if (botonAgregar && lista) {
        botonAgregar.addEventListener("click", () => {
            let nuevo = document.createElement("li")
            nuevo.textContent = "Nuevo Elemento"
            lista.appendChild(nuevo)
            alert("Se ha añadido un nuevo elemento")
        })
    }

    let formReseña = document.getElementById("form-reseña")

    if (formReseña) {
        formReseña.addEventListener("submit", (e) => {
            e.preventDefault()

            let nombre = document.getElementById("nombreAutor").value
            let titulo = document.getElementById("tituloReseña").value
            let comentario = document.getElementById("contenidoReseña").value
            let estrellas = document.getElementById("estrellasReseña").value

            let nuevaReseña = {
                nombre,
                titulo,
                comentario,
                estrellas
            }

            let reseñas = JSON.parse(localStorage.getItem("reseñas")) || []
            reseñas.push(nuevaReseña)
            localStorage.setItem("reseñas", JSON.stringify(reseñas))

            formReseña.reset()
            alert("¡Gracias por tu reseña!")
        })
    }

    let form = document.getElementById("form-preferencias")
    let saludo = document.getElementById("saludo")

    if (form && saludo) {
        let nombreGuardado = localStorage.getItem("nombre")
        let colorGuardado = localStorage.getItem("colorFondo")

        if (nombreGuardado && colorGuardado) {
            document.body.style.backgroundColor = colorGuardado
            saludo.textContent = `¡Hola, ${nombreGuardado}! Bienvenido.`
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let nombre = document.getElementById("nombre").value
            let color = document.getElementById("colorFondo").value

            localStorage.setItem("nombre", nombre)
            localStorage.setItem("colorFondo", color)

            document.body.style.backgroundColor = color
            saludo.textContent = `¡Hola, ${nombre}! Tus preferencias fueron guardadas.`
        })
    }

    let btnVaciar = document.getElementById("vaciar-carrito")
    if (btnVaciar) {
        btnVaciar.addEventListener("click", () => {
            localStorage.removeItem("carrito")
            actualizarContadorCarrito()
            alert("Carrito vaciado correctamente.")
        })
    }

    let contenedor = document.getElementById("listado-reseñas")
    if (contenedor) {
        let reseñas = JSON.parse(localStorage.getItem("reseñas")) || []

        reseñas.forEach(resena => {
            let div = document.createElement("div")
            div.classList.add("resena")
            div.innerHTML = `
            <h3>${resena.titulo}</h3>
            <p>${resena.comentario}</p>
            <p>${resena.estrellas}</p>
            <p>- ${resena.nombre}</p>
        `
            contenedor.appendChild(div)
        })
    }

    let campoPregunta = document.getElementById("nuevaPregunta")
    let botonGuardar = document.getElementById("guardarPregunta")
    let listaPreguntas = document.getElementById("listaPreguntas")

    if (campoPregunta && botonGuardar && listaPreguntas) {
        let preguntasGuardadas = JSON.parse(localStorage.getItem("preguntas")) || []
        preguntasGuardadas.forEach(p => renderPregunta(p))
        botonGuardar.addEventListener("click", () => {
            let texto = campoPregunta.value.trim()
            if (texto === "") return
            renderPregunta(texto)
            preguntasGuardadas.push(texto)
            localStorage.setItem("preguntas", JSON.stringify(preguntasGuardadas))
            campoPregunta.value = ""
        })
    }

    function renderPregunta(texto) {
        let item = document.createElement("li")
        item.textContent = texto
        listaPreguntas.appendChild(item)
    }
})