/* if
   if / else
   if / else if / else
*/

let llueve = false
let loQueVoyAHacer = ""
if (llueve) {
   loQueVoyAHacer = "Necesito un paraguas"
} else {
   loQueVoyAHacer = "Me voy de paseo"
}

document.getElementById("js_1").innerText = loQueVoyAHacer


let diaSemana = "viernes"

let mensaje = ""
if (diaSemana == "lunes") {
   mensaje = `Hoy es ${diaSemana}`
} else if (diaSemana == "martes") {
   mensaje = `Hoy es ${diaSemana}`
} else {
   mensaje = "Hoy no es ni lunes ni martes"
}

document.getElementById("js_1").innerText = mensaje