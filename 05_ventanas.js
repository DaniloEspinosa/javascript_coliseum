// VENTANAS INTERACTIVAS

// Alert
alert("Soy un alert!!")

// Confirmación
let respuesta = confirm("¿Estas de acuerdo?")

/*if (respuesta == true) {
    document.getElementById("ventana").innerText = "Estas de acuerdo, continuemos"
}
*/

let codigo = "<p style='color:red'>" + respuesta + "</p>"
document.getElementById("ventana").innerHTML = codigo

let nombre = prompt("¿Como te llamas?")
alert(`Te llamas ${nombre}`)