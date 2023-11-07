let diaSemana = "sabado"

let mensaje = ""
switch (diaSemana) {
    case "lunes":
        mensaje = "Hoy es laborable"
        break
    case "martes":
        mensaje = "Hoy es laborable"
        break
    case "miercoles":
        mensaje = "Hoy es laborable"
        break
    case "jueves":
        mensaje = "Hoy es laborable"
        break
    case "viernes":
        mensaje = "Hoy es laborable"
        break
    default:
        mensaje = "Hoy no es laborable"
        break
}
console.log(mensaje)

switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        mensaje = "Hoy es laborable"
        break
    default:
        mensaje = "Hoy no es laborable"
        break
}

console.log(mensaje)
