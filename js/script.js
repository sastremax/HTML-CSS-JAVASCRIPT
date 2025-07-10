document.addEventListener("DOMContentLoaded", () => {
    let botonesCarrito = document.querySelectorAll(".add-to-cart")

    if (botonesCarrito.length === 0) {
        console.log("No se encontraron botones de carrito.")
    }

    function actualizarContadorCarrito() {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []
        let contador = document.getElementById("contador-carrito")
        if (contador) {
            contador.textContent = carrito.length
        }
    }

    botonesCarrito.forEach(boton => {
        boton.addEventListener("click", () => {
            let producto = {
                id: boton.getAttribute("data-id"),
                nombre: boton.getAttribute("data-nombre"),
                precio: boton.getAttribute("data-precio")
            }

            let carrito = JSON.parse(localStorage.getItem("carrito")) || []
            carrito.push(producto)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            sessionStorage.setItem("carrito", JSON.stringify(carrito))
            actualizarContadorCarrito()
            
            let carritoIcono = document.getElementById("carrito-info")

            if (carritoIcono) {
                carritoIcono.classList.add("animado")
                setTimeout(() => {
                    carritoIcono.classList.remove("animado")
                }, 300)
            }
        })
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

    let botonReview = document.getElementById("agregarReviewNotebook")
    let contenedor = document.getElementById("contenedorResenas")

    if (botonReview && contenedor) {
        botonReview.addEventListener("click", () => {
            let card = document.createElement("div")
            card.className = "resena"
            card.innerHTML = `
                <h4>Notebook Gamer Acer</h4>
                <p>Excelente calidad y entrega rápida.</p>
                <p>⭐⭐⭐⭐⭐</p>`
            contenedor.appendChild(card)
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
    
})