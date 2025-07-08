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

