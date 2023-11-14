// CREAR UN PALÍNDROMO
// Un palíndromo es un texto que tiene sentido
// incluso si se escribe al revés.
// En este ejercicio nuestro objetivo será invertir un
// texto, como si se mirara en un espejo

let texto = "Dabale arroz a la zorra el abad"


export function invertirTexto(tex) {
    let textoInverso = ""
    let textoNuevo = ""
    for (let i = tex.length - 1; i >= 0; i--)
        textoInverso = textoNuevo += tex[i]
    return textoInverso
}

console.log(invertirTexto(texto))