// BUCLE FOR "CLÁSICO"

let arrayFrutas = ["mango", "pera", "cereza", "platano", "castaña"]
let arrayFrutasMayusculas = []

for (let i = 0 ; i < arrayFrutas.length; i++) {
    // console.log(arrayFrutas[i])
    arrayFrutasMayusculas[i] = arrayFrutas[i].charAt(0).toUpperCase() + arrayFrutas[i].slice(1).toLowerCase() // .toLowerCase() no es necesario
   
    // let frutaCorregida = arrayFrutas[i].charAt(0).toUpperCase() + arrayFrutas[i].slice(1).toLowerCase()
    // arrayFrutasMayusculas[i] = frutaCorregida
    // arrayFrutasMayusculas.push(frutaCorregida)
}

console.log(arrayFrutasMayusculas)

