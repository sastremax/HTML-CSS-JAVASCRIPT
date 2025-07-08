document.addEventListener("DOMContentLoaded", () => {
    let botonesCarrito = document.querySelectorAll(".add-to-cart")

    if (botonesCarrito.length === 0) {
        console.log("No se encontraron botones de carrito.")
    }

    botonesCarrito.forEach(boton => {
        boton.addEventListener("click", () => {
            let card = boton.closest(".product-card")
            if (!card) return
            let nombre = card.querySelector("h3")?.textContent
            if (nombre) {
                console.log("Producto agregado:", nombre)
            } else {
                console.log("No se pudo obtener el nombre del producto.")
            }
        })
    })
})

let botonAgregar = document.getElementById("agregarElemento")
let lista = document.getElementById("listaDinamica")

botonAgregar.addEventListener("click", () => {
    let nuevo = document.createElement("li")
    nuevo.textContent = "Nuevo Elemento"
    lista.appendChild(nuevo)
    alert("Se ha añadido un nuevo elemento")
})

let botonReview = document.getElementById("agregarReviewNotebook")
let contenedor = document.getElementById("contenedorResenas")

botonReview.addEventListener("click", () => {
    let card = document.createElement("div")
    card.className = "resena"
    card.innerHTML = 
    `
    <h4>Notebook Gamer Acer</h4>
    <p>Excelente calidad y entrega rápida.</p>
    <p>⭐⭐⭐⭐⭐</p>`
    contenedor.appendChild(card)
})

let botonesCarrito = document.querySelectorAll(".add-to-cart")

botonesCarrito.forEach(boton => {
    boton.addEventListener("click", () => {
        let nombreProducto = boton.closest(".product-card").querySelector("h3").textContent
        console.log("Producto agregado:", nombreProducto)
    })
})



/*
console.log("JavaScript funcionando correctamente");

let price1 = parseFloat(prompt("Ingresá el precio del primer producto"));
let price2 = parseFloat(prompt("Ingresá el precio del segundo producto"));

if (isNaN(price1) || isNaN(price2)) {
    console.log("Error: los precios ingresados no son validos.");
} else {
    let sum = price1 + price2;
    let diff = price1 - price2;
    let product = price1 * price2;
    let quotient = price1 / price2;

    console.log("Suma total: $" + sum);
    console.log("Diferencia: $" + diff);
    console.log("Producto: " + product);
    console.log("División: " + quotient);

    if (sum > 100000) {
        console.log("Supera los $100.000. Envio gratis incluido");
    } else {
        console.log("No alcanza el minimo para envio gratis.");
    }
}

let clientName = prompt("Ingresá tu nombre:");
let clientAge = parseInt(prompt("Ingresá tu edad:"));

if (isNaN(clientAge)) {
    console.log("Edad no valida.");
} else {
    console.log("Cliente: " + clientName + " Edad: " + clientAge);

    if (clientAge >= 18) {
        console.log("Puede realizar compras sin restricciones.");
    } else {
        console.log("Puede realizar compras por no ser un adulto para comprar.");
    }
}

let age = 22
let isVIP = true

if (isNaN(age)) {
    console.log("Por favor ingresá una edad válida.")
} else if (age >= 18 && isVIP) {
    console.log("Acceso permitido al área exclusiva.")
} else if (age >= 18) {
    console.log("Acceso permitido al evento.")
} else {
    console.log("Acceso denegado.")
}

let products = [
    { name: "Notebook", price: 150000, discount: true },
    { name: "Mouse", price: 5000, discount: false },
    { name: "Monitor", price: 60000, discount: true }
]

let withDiscount = 0
let withoutDiscount = 0

for (let i = 0; i < products.length; i++) {
    if (products[i].discount) {
        console.log(products[i].name + " tiene descuento.")
        withDiscount++
    } else {
        withoutDiscount++
    }
}

console.log("Total con descuento: " + withDiscount)
console.log("Total sin descuento: " + withoutDiscount)  

function verificarEdadCliente(nombre, edad) {
    if (edad >= 18) {
        console.log(nombre + " puede realizar compras sin restricciones.");
    } else {
        console.log(nombre + " es menor de edad.");
        console.log("Le faltan " + (18 - edad) + " años para poder comprar algunos productos.");
    }
}

verificarEdadCliente("Maxi", 16);

function calcularPrecioFinal(nombreProducto, precio, iva = 21) {
    let total = precio + (precio * iva / 100);
    console.log("Producto: " + nombreProducto);
    console.log("Precio final con IVA: $" + total);
}

calcularPrecioFinal("Notebook Gamer", 350000);
calcularPrecioFinal("Mouse", 5000, 10);
*/
