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
nombre = nombre.toLowerCase()

console.log(nombre)