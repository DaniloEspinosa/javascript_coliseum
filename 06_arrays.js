// AARAYS

let array1 = ["Anna", "Sara", "John"]
// console.log(typeof(array1))
let nombre = "Pep"
console.log(nombre.length)
console.log(nombre[1])
console.log(array1.length)

let fruta1 = "platano"
let arrayFrutas = ["mango", "pera", "cereza", fruta1, "castaña"]
console.log(arrayFrutas[3])
// Obtener el utlimo elemento de un array
console.log(arrayFrutas[arrayFrutas.length - 1])
arrayFrutas[2] = "naranja"
console.log(arrayFrutas)

//push("parametro") añade un elemento al final de una lista
arrayFrutas.push("limones")
console.log(arrayFrutas)

//pop() quita el ultimo elemento
let ultimaFruta = arrayFrutas.pop()
console.log(arrayFrutas)
console.log(ultimaFruta)

//shift() quita el primero de la lista
let primeraFruta = arrayFrutas.shift()
console.log(arrayFrutas)
console.log(primeraFruta)

let arrayFrutasInvierno = ["mango", "pera", "cereza", "platano", "castaña"]
let arrayFrutasVerano = ["melocoton", "melon", "sandia"]

// arrayFrutasInvierno.push(arrayFrutasVerano)
// console.log(arrayFrutasInvierno)
// let arrayFrutasPlano = arrayFrutasInvierno.flat()
// console.log(arrayFrutasPlano)


let arrayFrutasCompleta = arrayFrutasInvierno.concat(arrayFrutasVerano)
console.log(arrayFrutasCompleta)

