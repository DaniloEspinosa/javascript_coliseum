// WHILE

let llueve = true
while (llueve) {
    for (let i = 1; i <= 5 ; i++) {
        console.log(`Hoy es dia ${i} y esta lloviendo`)
        if (i == 5) {
            console.log("Ya ha dejado de llover")
            llueve = false
        }
    }
}
// do {
//     código
// } while () {

// }

let frutas = ["plátano", "naranja", "limon", "mango"]

for (let i = 0; i < frutas.length; i++){
    console.log(`${i + 1}. ${frutas[i]}`)
}

let i = 0
while (i < frutas.length){
    console.log(`${i + 1}. ${frutas[i]}`);
    i++
}
console.log("hola")