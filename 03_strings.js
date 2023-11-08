// STRINGS = Cadena de texto

let ejemplo1 = "Hola"
let ejemplo2 = 'Hola'
let ejemplo3 = `Hola` // Aportación de la actualización del 2014

let frase1 = "Ella me dijo 'Hola'"
console.log(frase1)

let nombre = "Juancito"
let frase2 = `${nombre.toUpperCase()} me dijo "hola"`
console.log(frase2)

// Forma antigua de crear una frase
let saludo1 = "Buenos"
let saludo2 = "días"
let saludoFinal = saludo1 + " " + saludo2 // + lo que hace es concatenar, es decir une las variables
let saludo_final = saludo1 + saludo2
console.log(saludoFinal)

console.log("El texto tiene", nombre.length, "caracteres.")
console.log(`El texto tiene ${nombre.length} caracteres.`)

nombre = "bill"
console.log(nombre[0])

nombre = "feDErICo"

// nombre = nombre.toLowerCase()

console.log(nombre.charAt(0))
console.log(nombre[0])
// slice corta desde la posicion indicada hasta la indicada, en caso de no indicar el segundo parametro va hasta el final
console.log(nombre.slice(1))
nombreBien = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()
console.log(nombreBien)

let nombreCompleto = "      Pérez González, María       "
let nombreSinEspacios = nombreCompleto.trim()
console.log(nombreSinEspacios)

let nombreArreglado = nombreSinEspacios.split(", ")

nombreArreglado = nombreArreglado[1] + " " + nombreArreglado[0]
console.log(nombreArreglado)


let fecha = "2023/11/8"
// Obtener hoy es 8 del 11 del 2023
let fechaCortada = fecha.split("/")
console.log(fechaCortada)
let mensaje1 = `Hoy es ${fechaCortada[2]} del ${fechaCortada[1]} del ${fechaCortada[0]}`

console.log(mensaje1)