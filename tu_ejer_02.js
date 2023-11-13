// NÚMERO PRIMO
// Crea una función que diga si un número es primo o no
// Número primo es aquel que solo es divisible por si mismo y 1

let numero = 11

function esPrimo(numero) {
    if (numero < 2) {
        return `El número ${numero} no es primo`
    }
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            return `El número ${numero} no es primo`
        }
    }
    return `El número ${numero} es primo`
}

console.log(esPrimo(numero))

numero = prompt("Escribe un numero para saber si es primo")
alert(esPrimo(numero))