// ¿ES UN PALÍNDROMO?
// Quemos saber si un texto es el inverso de otro
// Hay que quitar los espacios, las comas, puntos, los dos puntos y los puntos y coma

import {invertirTexto} from "./tu_ejer_04.js"

let texto = "Dabale arroz a la zorra el abad"

// function invertirTexto(tex) {
//     let textoInverso = ""
//     let textoNuevo = ""
//     for (let i = tex.length - 1; i >= 0; i--)
//         textoInverso = textoNuevo += tex[i]
//     return textoInverso
// }


function esPalindromo (texto) {
    let limpio = texto
                    .replaceAll(" ","")
                    .replaceAll(",","")
                    .replaceAll(".","")
                    .replaceAll(";","")
                    .replaceAll(":","")

    if (invertirTexto(limpio).toLowerCase() == limpio.toLowerCase()) {
        return "Es palindromo"
    } else {
        return "No es palindromo"
    }
}

console.log(esPalindromo(texto))
