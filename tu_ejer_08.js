/*
Se te proponen una serie de ejercicios para practicar
los arrays y el bucle for.

Para resolver NO hay que utilizar ninguna función matemática
Crea el código necesario para resolver los requerimientos

Dado este array:
let arrayNumeros1 = [ 4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [ 4, 2, 7, 1, 6]
o cualquier otro array solo con números

1) Mostrar por consola la suma de todos los valores
2) Mostrar por consola el promedio
3) Encontrar los valores máximo y mínimo
4) Sumar los valores con índice par y restar los impares
Hay que mostrar por consola cada resultado

Dado estos arrays:
let arrayNombres1 = [ "José María", "Francisco", "Luís", "Mónica", "Nicolás", "Ricardo", "Sara", "Anna", "Pol"]
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie" ]

5) Encontrar el elemento con el texto más largo y guardarlo en la variable varTextoMasLargo
Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.

6) Lo mismo para el texto más corto.

7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 8, 5, 4, etc.

8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i

Dado este array:
let arrayMixto = [ "Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28 ]
o cualquier otro array con una estructura similar

9) Debes obtener otro array llamado arrayBidimensional que sea así:
[ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

10) A partir de un array como el que has obtenido en el ejercicio 9,
debes resolver los ejercios 1, 2, 3 y 4
*/

let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
let arrayNumeros3 = [-1, -3, -5, -20, -9]

// 1) Mostrar por consola la suma de todos los valores
function sumar(lista) {
    let total = 0
    for (i = 0; i < lista.length; i++) {
        total += lista[i]
    }
    return total
}

console.log(sumar(arrayNumeros1))
console.log(sumar(arrayNumeros2))

// 2) Mostrar por consola el promedio
function promediar(lista) {
    let total = 0
    let promedio = 0
    for (i = 0; i < lista.length; i++) {
        total += lista[i]
    }
    promedio = total / lista.length
    return promedio
}

console.log(promediar(arrayNumeros1))
console.log(promediar(arrayNumeros2))
console.log(promediar(arrayNumeros3))

// 3) Encontrar los valores máximo y mínimo
function maximo(lista) {
    let maximo = lista[0]
    let minimo = lista[0]
    for (i = 0; i < lista.length; i++) {
        if (lista[i] > maximo) {
            maximo = lista[i]
        } else if (lista[i] < minimo) {
            minimo = lista[i]
        }
    }
    return `El maximo es: ${maximo} y el mínimo es: ${minimo}`
}

console.log(maximo(arrayNumeros1));
console.log(maximo(arrayNumeros2));
console.log(maximo(arrayNumeros3));

// 4) Sumar los valores con índice par y restar los impares
// Hay que mostrar por consola cada resultado
function sumarParesRestarImpares(lista) {
    let sumaPares = 0
    let restaImpares = 0
    for (i = 0; i < lista.length; i++) {
        if (lista[i] % 2 == 0) {
            sumaPares += lista[i]
        } else if (lista[i] % 2 != 0) {
            restaImpares -= lista[i]
        }
    }
    return `La suma de los pares es ${sumaPares} y la resta de los impares es ${restaImpares}`
}

console.log(sumarParesRestarImpares(arrayNumeros1))
console.log(sumarParesRestarImpares(arrayNumeros2))
console.log(sumarParesRestarImpares(arrayNumeros3))


let arrayNombres1 = ["José María", "Francisco", "Luís", "Mónica", "Nicolás", "Ricardo", "Sara", "Anna", "Pol"]
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie", "Patricio"]

// 5) Encontrar el elemento con el texto más largo y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.

function textoMasLargoOListado(lista) {
    let varTextoMasLargo = ""  //Observar como en la situacion contraria se debe iniciar este valor en la primera palabra del array
    let textosMasLargos = []
    for (i = 0; i < lista.length; i++) {
        if (lista[i].length > varTextoMasLargo.length) {
            varTextoMasLargo = lista[i]
        }
    }
    for (i = 0; i < lista.length; i++) {
        if (lista[i].length == varTextoMasLargo.length) {
            textosMasLargos.push(lista[i])
        }
        if (textosMasLargos.length > 1) {
            resultado = `Los nombres mas largos son: ${textosMasLargos}`
        } else {
            resultado = `El nombre mas largo es: ${varTextoMasLargo}`
        }
    }

    return resultado
}

console.log(textoMasLargoOListado(arrayNombres2));
console.log(textoMasLargoOListado(arrayNombres1));
console.log(textoMasLargoOListado(arrayNombres2));

// 6) Lo mismo para el texto más corto.

function textoMasCortoOListado(lista) {
    let varTextoMasCorto = lista[0]
    let textosMasCortos = []
    for (i = 1; i < lista.length; i++) {
        if (lista[i].length < varTextoMasCorto.length) {
            varTextoMasCorto = lista[i]
        }
    }
    for (i = 0; i < lista.length; i++) {
        if (lista[i].length == varTextoMasCorto.length) {
            textosMasCortos.push(lista[i])
        }
        if (textosMasCortos.length > 1) {
            resultado = `Los nombres mas largos son: ${textosMasCortos}`
        } else {
            resultado = `El nombre mas largo es: ${varTextoMasCorto}`
        }
    }

    return resultado
}

console.log(textoMasCortoOListado(arrayNombres1));
console.log(textoMasCortoOListado(arrayNombres2));

// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 8, 5, 4, etc.


function longitudNombres(lista) {
let longitudNombres = []
for (i = 0; i < lista.length; i++) {
    longitudNombres.push(lista[i].length)
}
return longitudNombres
}

console.log(longitudNombres(arrayNombres1));
console.log(longitudNombres(arrayNombres2));

// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i

let arrayNombresConI = []

for (i = 0; i < arrayNombres1.length; i++) {

}



console.log(letra in nombre);