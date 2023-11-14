// EL usuario va a introducir mediante un prompt
// una serie de números separados por comas.
// Hay que mostrar:
//      - la suma de todos los valores
//      - cual es el número mayor
//      - cual es el número menor
//      - el promedio
// En el caso que no se puedan realizar las operaciones mostraremos
// un mensaje de error con la información correspondiente.

// Pista: ¿nos iría bien un array?

let arrayNumeros = [1,2,3,12,23,4,5,6,7]
suma = 0
for (i = 0; i < arrayNumeros.length ; i++) { 
    suma += arrayNumeros[i]
}

let arrayOrdenado = arrayNumeros.sort()

console.log(arrayNumeros);
console.log(suma);