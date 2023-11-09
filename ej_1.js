// Preguntar la edad
let edad = prompt("¿Qué edad tienes??")
alert(typeof(edad))
if ((edad == null) || (edad == "" || isNaN(edad))) {
    alert("Debes introducir una edad valida")
} else {
    if (edad < 18) {
        alert(`Como tienes ${edad}\neres menor de edad`)  
    } else {
        alert(`Como tienes ${edad}\neres mayor de edad`)
    }
}