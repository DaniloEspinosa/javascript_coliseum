let listaAlumnos = ["Peter", "Mary", "Clark"]

// Necesito guardar información del:
//      nombre
//      apellido
//      edad
//      ciudad
//      es_alumno_ahora

let listaAlumnosApellidos = ["Parker", "Jane", "Kent"]

let alumno1 = {nombre: "Peter", apellido: "Parker", edad: 25, ciudad: "NY", es_alumno: true}
alumno1.hobby = "Las arañas"

console.log(typeof(alumno1))

let alumno2 = new Object()

alumno2.nombre = "Mary"
alumno2["apellido"] = "Jane"
alumno2.nombre = "Sally"
alumno2.nombreCompleto = function () {
    return this.nombre + " " + this.apellido
}

console.log(alumno1);
console.log(alumno1.edad);
console.log(`El alumno 2 es: ${alumno2.nombre} ${alumno2.apellido}`);
console.log(alumno2.nombreCompleto());