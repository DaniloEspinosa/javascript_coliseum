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

let precio = prompt(`Por favor ingrese el precio del artículo`);
let montoIngresado = prompt(`Por favor ingrese el monto con el que pagara el articulo`);
let vuelto = montoIngresado - precio;

// Declarar los arrays que contienen los valores de los billetes y las monedas
const billetes = [500, 200, 100, 50, 20, 10, 5];
const monedas = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

let devolucion = [];
let palabra = ``;
for (let i = 0; i < billetes.length; i++) {
  if (vuelto > billetes[i]) {
    let cantidad = Math.floor(vuelto / billetes[i]);
    if (cantidad > 1) {
      palabra = `billetes`;
    } else {
      palabra = `billete`;
    }
    let linea = `\n${cantidad} ${palabra} de ${billetes[i]}`;
    devolucion.push(linea);
    vuelto = vuelto % billetes[i];
  }
}
for (let i = 0; i < monedas.length; i++) {  
  if (vuelto > monedas[i]) {
    let cantidad = Math.floor(vuelto / monedas[i]);
    if (cantidad > 1) {
      palabra = `monedas`;
    } else {
      palabra = `moneda`;
    }
    let linea = `\n${cantidad} ${palabra} de ${monedas[i]}`;
    devolucion.push(linea);
    vuelto = vuelto % monedas[i];
  }
}

document.getElementById("devolucion").innerText = "Devolucion:"
document.getElementById("mostrar_pantalla").innerText = devolucion
