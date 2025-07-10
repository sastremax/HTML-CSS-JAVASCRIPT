document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("lista-carrito")
    const botonVaciar = document.getElementById("vaciar-carrito")
    const totalGeneral = document.getElementById("total-compra")

    function mostrarCarrito() {
        lista.innerHTML = ""
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []
        let total = 0

        carrito.forEach((producto, index) => {
            if (!producto.cantidad) {
                producto.cantidad = 1
            }

            let subtotal = producto.precio * producto.cantidad
            total += subtotal

            let li = document.createElement("li")

            li.innerHTML = `
                <div class="carrito-linea nombre">${producto.nombre}</div>
                <div class="carrito-linea precio">- $${producto.precio}</div>
                <div class="carrito-linea controles-cantidad">
                <button class="btn-menos">–</button>
                <span class="cantidad">${producto.cantidad}</span>
                <button class="btn-mas">+</button>
                    Subtotal: $<span class="subtotal">${subtotal.toFixed(2)}</span>
                <button class="btn-eliminar">Eliminar</button>
                </div>
            `
            let btnMas = li.querySelector(".btn-mas")
            let btnMenos = li.querySelector(".btn-menos")
            let btnEliminar = li.querySelector(".btn-eliminar")

            btnMas.addEventListener("click", () => {
                producto.cantidad++
                actualizarCarrito(carrito)
            })

            btnMenos.addEventListener("click", () => {
                if (producto.cantidad > 1) {
                    producto.cantidad--
                    actualizarCarrito(carrito)
                }
            })

            btnEliminar.addEventListener("click", () => {
                carrito.splice(index, 1)
                actualizarCarrito(carrito)
            })

            lista.appendChild(li)
        })

        if (totalGeneral) {
            totalGeneral.textContent = total.toFixed(2)
        }
    }

    function actualizarCarrito(carrito) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
        mostrarCarrito()
    }

    if (botonVaciar) {
        botonVaciar.addEventListener("click", () => {
            localStorage.removeItem("carrito")
            mostrarCarrito()
        })
    }

    mostrarCarrito()
})