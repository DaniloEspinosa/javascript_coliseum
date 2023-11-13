// Pide una nota (número). Muestra la calificación según la nota:

// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente

let nota = prompt("Escribe aqui la nota")
let mensaje = "La nota obtenida es "

// function mostrarTextoNota (nota) {
//     if (nota <= 3){
//         return mensaje += "muy deficiente"
//     } else if (nota <= 5){
//         return mensaje += "insuficiente"
//     } else if (nota <= 6){
//         return mensaje += "suficiente"
//     } else if (nota <= 7){
//         return mensaje += "bien"
//     } else if (nota <= 9){
//         return mensaje += "notable"
//     } else if (nota <= 10){
//         return mensaje += "sobresaliente"
//     } else {
//         return "No has puesto una nota valida"
//     }
// }

// mostrarTextoNota(nota)

function mostrarTextoNota (nota) {
    if (nota <= 3){
        alert( mensaje += "muy deficiente")
    } else if (nota <= 5){
        alert( mensaje += "insuficiente")
    } else if (nota <= 6){
        alert( mensaje += "suficiente")
    } else if (nota <= 7){
        alert( mensaje += "bien")
    } else if (nota <= 9){
        alert( mensaje += "notable")
    } else if (nota <= 10){
        alert( mensaje += "sobresaliente")
    } else {
        alert( "No has puesto una nota valida")
    }
}

mostrarTextoNota(nota)
