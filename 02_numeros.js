//  "NÚMEROS"

//Hay dos tipos principales de números:
// * enteros
// * decimales
// ambos son de tipo number

// Operaciones habituales
let numero1 = 100
let numero2 = 2

let suma = numero1 + numero2 // el resultado es 102
suma += numero1              // ahora el resultado es 202 --> Esta manera hace lo mismo que la de abajo
suma = suma + numero1        // ahora el resultado es 302 --> Esta manera hace lo mismo que la de arriba

let resta = numero1 - numero2 // 98
resta -= numero2              // 96
resta = resta - numero2       // 94

let multiplicacion = numero1 * numero2 // 200
resta *= numero2              // 400
resta = resta * numero2       // 800

let division = numero1 / numero2 // 50
resta /= numero2              // 25
resta = resta * numero2       // 12.5

let exponente = numero1 ** numero2 // 10000
let raiz_cuadrada = numero1 ** (1/numero2) //10

let modulo = 100 % 3  // 1

// Librería Math que viene por defecto
let PI_falso = 3.14
let PI_correcto = Math.PI