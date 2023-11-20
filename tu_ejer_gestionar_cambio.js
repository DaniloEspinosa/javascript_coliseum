/*
Vamos a gestionar las devoluciones de cambio de un comercio.

Empezaremos por recibir, por parte del usuario, el coste de un artículo.
Después pagará, indicando la cantidad. Obviamente debe ser mayor o igual al
precio del producto. En caso contrario informaremos del error.

El programa generará la devolución del cambio, en forma de billetes y monedas 
de curso legal. Ejemplo:

¿Cúal es el precio del artículo?
1025.35
Pago:
2000

Devolución:
1 billete de 500€,
2 billetes de 200€,
1 billete de 50€, 
1 billete de 20€,
2 monedas de 2€,
1 moneda de 0.50€
1 moneda de 0.10€,
1 moneda de 0.05€
*/

let precio = 1025.35
let montoIngresado = 2000
let vuelto = montoIngresado - precio


// DESPUES RESOLVER CON BUCLE FOR O WHILE
const billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
let billete500 = 500
let billete200 = 200
let billete100 = 100
let billete50 = 50
let billete20 = 20
let billete10 = 10
let billete5 = 5
let moneda2 = 2
let moneda1 = 1
let moneda050 = 0.50
let moneda020 = 0.20
let moneda010 = 0.10
let moneda005 = 0.05
let moneda002 = 0.02
let moneda001 = 0.01

let devolucion = []
for (let i = 0; i < billetes.length; i++) {
    if (vuelto > billetes[i]) {
        devolucion.push(Math.floor(vuelto / billetes[i]))
        vuelto = vuelto % billetes[i]
    }
}
console.log(devolucion);


// function cambio(vuelto) {
//     let devolucion = []
//     if (vuelto > 500) {
//         devolucion.push(Math.floor(vuelto / 500))
//         vuelto = vuelto % 500
//     }
//     if (vuelto > 200) {
//         devolucion.push(Math.floor(vuelto / 200))
//         vuelto = vuelto % 200
//     }
//     if (vuelto > 100) {
//         devolucion.push(Math.floor(vuelto / 100))
//         vuelto = vuelto % 100
//     }
//     if (vuelto > 50) {
//         devolucion.push(Math.floor(vuelto / 50))
//         vuelto = vuelto % 50
//     }
//     if (vuelto > 20) {
//         devolucion.push(Math.floor(vuelto / 20))
//         vuelto = vuelto % 20
//     }
//     if (vuelto > 10) {
//         devolucion.push(Math.floor(vuelto / 10))
//         vuelto = vuelto % 10
//     }
//     if (vuelto > 5) {
//         devolucion.push(Math.floor(vuelto / 5))
//         vuelto = vuelto % 5
//     }
//     if (vuelto > 2) {
//         devolucion.push(Math.floor(vuelto / 2))
//         vuelto = vuelto % 2
//     }
//     if (vuelto > 1) {
//         devolucion.push(Math.floor(vuelto / 1))
//         vuelto = vuelto % 1
//     }
//     if (vuelto > 200) {
//         devolucion.push(Math.floor(vuelto / 200))
//         vuelto = vuelto % 200
//     }
//     if (vuelto > 500) {
//         devolucion.push(Math.floor(vuelto / 500))
//         vuelto = vuelto % 500
//     }
//     if (vuelto > 200) {
//         devolucion.push(Math.floor(vuelto / 200))
//         vuelto = vuelto % 200
//     }
//     if (vuelto > 200) {
//         devolucion.push(Math.floor(vuelto / 200))
//         vuelto = vuelto % 200
//     }
//     if (vuelto > 200) {
//         devolucion.push(Math.floor(vuelto / 200))
//         vuelto = vuelto % 200
//     }
//     if (vuelto > 200) {
//         devolucion.push(Math.floor(vuelto / 200))
//         vuelto = vuelto % 200
//     }

//     return devolucion
// }

// console.log(cambio(2800
// ));