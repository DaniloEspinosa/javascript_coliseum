// Crear una calculadora
// Va a pedir al usuario que indique
// dos números y la operación que desea hacer

function calculadora(num1, operacion, num2) {
    if (operacion == "+"){
        resultado = num1 + num2
    } else if (operacion == "-"){
        resultado = num1 - num2
    } else if (operacion == "/"){
        if (num2 == 0){
            return "No se puede dividir en CERO"
        }
        resultado = num1 / num2
    } else if (operacion == "*"){
        resultado = num1 * num2
    } else {
        return "Operacion no identificada"
    }
    return resultado
}

console.log(calculadora(100,"/",3))


function calculadoraSwitch(num1, operacion, num2) {
    switch (operacion){
        case "+":
        resultado = num1 + num2
        break
        case "-":
        resultado = num1 - num2
        break
        case "/":
            if (num2 == 0){
                return "No se puede dividir en CERO"
            }
        resultado = num1 / num2
        break
        case "*":
        resultado = num1 * num2
        break
        default:
            return "Operación no identificada"
    }
    return resultado
}

console.log(calculadoraSwitch(5,"-",2))

function calculadoraSwitch2(num1, operacion, num2) {
    switch (operacion){
        case "+":
        return num1 + num2
        case "-":
        return num1 - num2
        case "/":
            if (num2 == 0){
                return "No se puede dividir en CERO"
            }
        return num1 / num2
        case "*":
        return num1 * num2
        default:
            return "Operación no identificada"
    }
}

console.log(calculadoraSwitch2(5,"/",0))
console.log(calculadoraSwitch2(5,"n",0))
console.log(calculadoraSwitch2(5,"*",7))
console.log(calculadoraSwitch2(7,"+",13))
console.log(calculadoraSwitch(5,"/",0))
console.log(calculadoraSwitch(5,"n",0))
console.log(calculadoraSwitch(5,"*",7))
console.log(calculadoraSwitch(7,"+",13))
console.log(calculadora(5,"/",0))
console.log(calculadora(5,"n",0))
console.log(calculadora(5,"*",7))
console.log(calculadora(7,"+",13))
console.log("aqui")
console.log(calculadoraClase(5,"/",0))
console.log(calculadoraClase(5,"n",0))
console.log(calculadoraClase(5,"*",7))
console.log(calculadoraClase(7,"+",13))

function calculadoraClase (num1, operacion, num2) {
    switch (operacion) {
        case "+":
            return sumar(num1,num2)
        case "-":
            return sumar(num1,num2)
        case "/":
            return sumar(num1,num2)
        case "*":
            return sumar(num1,num2)
        default:
            return "Operación no identificada"
    }
}

function sumar(num1,num2){
    resultado = num1 + num2
}

function restar(num1,num2){
    resultado = num1 - num2
}

function dividir(num1,num2){
    if (num2 == 0){
        return "No se puede dividir en CERO"
    }
    resultado = num1 / num2
}

function multiplicar(num1,num2){
    resultado = num1 * num2
}