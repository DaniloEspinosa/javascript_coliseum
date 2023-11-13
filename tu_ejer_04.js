// CREAR UN PALÍNDROMO
// Un palíndromo es un texto que tiene sentido
// incluso si se escribe al revés.
// En este ejercicio nuestro objetivo será invertir un
// texto, como si se mirara en un espejo

let texto = "ana"
let textoNuevo = ""

function invertirTexto(tex) {
    for (let i = tex.length - 1; i >= 0; i--)
        textoNuevo += tex[i]
    return textoNuevo
}

console.log(invertirTexto(texto))


// controlar desde aqui para que sea palindromo
console.log(invertirTexto("hola"));

    if (invertirTexto(texto).toLowerCase() == texto.toLowerCase()) {
        resultado ="El texto es palindromo"
    } else {
        resultado ="No es palindromo"
    }
console.log(resultado)
console.log(texto.toLowerCase());
console.log(invertirTexto(texto));
