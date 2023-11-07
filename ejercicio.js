let edad = prompt("Que edad tienes??")

let respuesta = ""
if (edad < 18) {
    respuesta = `Como tienes ${edad} eres menor de edad`  
} else {
    respuesta = `Como tienes ${edad} eres mayor de edad`
}

alert(respuesta)

document.getElementById("edad").innerText = respuesta