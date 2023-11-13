// ¿Cuantas veces aparece un caracter en un texto?

// A partir de un texto y un caracter quiero saber
// cuantas veces aparece este caracter

let texto = prompt("Escribe aqui un texto").toLowerCase()
let caracter = prompt("Escribe aqui un caracter").toLowerCase()
let contador = 0



function caracterRepetido(texto, caracter) {
    for (let i = 0; i < texto.length; i++)
        if (texto[i] == caracter){
            contador ++
        }
        return contador
}

alert(caracterRepetido(texto, caracter)
);