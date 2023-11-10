//IMPORTANTE
//Javascript es sensible a las mayusculas y minusculas let = hola no es lo mismo que let = Hola
//Las palabras reservadas van en minusculas

// VARIABLES

// La palabra reservada let crea una variable
// con el signo = (asignacion) de damos un valor
let = "Anna"
let color // Crea la variable
color = "verde" // asignar el valor

let uno, dos, tres
uno = 1
dos = 2

// También existe la posibilidad de crear
// una variable con la palabra var
var ciudad = "Cornellà"
var ciudad = "Esplugues"

let comida = "pizza"

// for nos permite iterar o sea pasar de un valor a otro
for(let i = 0; i < comida.length; i++) {
    console.log(comida[i])
}

let texto = "Soy un texto"  // tipo String
let entero = 1 // Tipo Number
let decimal = 1.0 // Tipo Number
let booleano = true  // Tipo Boolean

entero += 2 // Una variable se incrementa a si misma
console.log(entero)

texto += " y hoy es viernes"
console.log(texto)

//VENTANAS EMERGENTES
// Hay tres tipos
/*
alert(mensaje de tipo string)  --> Muestra un mensaje al usuario
let confirmacion = confirm(mensaje)  --> devuelve tru o false
let pregunta = prompt(mensaje)  --> Este mensaje permite recibir una respuesta del usuario
*/

// ESTRUCTURAS DE CONTROL
// if

let frio = false
if (frio) {
    console.log("Hace frio")
} else {
    console.log("No hace frio")
}

let dia = "Viernes"
if (dia == "lunes") {
    console.log("Hoy no es lunes")
} else if (dia == "martes") {
    console.log("Hoy no es martes")
} else {
    console.log("Hoy no es lunes ni es martes")
}

// while

let tiempo = "llueve"
let contador = 0
while (contador < tiempo.length) {
    console.log("Llueve");
    contador ++
}

let contador2 = 1
while (true) {
    console.log("llueve")
    if (contador2 == 5){
        break
    }
    contador2 ++
}