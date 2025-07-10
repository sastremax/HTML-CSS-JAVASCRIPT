document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("lista-carrito")
    const botonVaciar = document.getElementById("vaciar-carrito")

    function mostrarCarrito() {
        lista.innerHTML = ""
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []

        carrito.forEach((producto, index) => {
            let li = document.createElement("li")
            li.textContent = `${producto.nombre} - $${producto.precio} `

            let btnEliminar = document.createElement("button")
            btnEliminar.textContent = "Eliminar"
            btnEliminar.addEventListener("click", () => {
                eliminarProducto(index)
            })

            li.appendChild(btnEliminar)
            lista.appendChild(li)
        })
    }

    function eliminarProducto(indice) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []
        carrito.splice(indice, 1)
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