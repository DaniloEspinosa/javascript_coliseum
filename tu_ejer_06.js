 // Crea una función que reciba 2 parámetros, precio e iva, 
//  y devuelva el precio con iva incluido. 
//  Si no recibe el iva, aplicará el 21 por ciento por defecto.

function precioConIva (precio, iva) {
    if (iva > 0) {
        return precio + (precio * iva/100)
    } else {
        return precio + (precio * 0.21)
    }
}


console.log(precioConIva(100,))

function precioConIva2 (precio, ...iva) {
    if (iva > 0) {
        return precio + (precio * iva/100)
    } else {
        return precio + (precio * 21/100)
    }
}


console.log(precioConIva2(100))