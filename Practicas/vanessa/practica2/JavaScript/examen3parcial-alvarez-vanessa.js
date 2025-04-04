// Examen de JavaScript – Nivel: Básico
// Total: 15 preguntas (6 teóricas + 8 prácticas)

// Parte 1: Teoría (7 preguntas)
// Responde con tus propias palabras o con fragmentos de código cortos.

// ¿Cuál es la diferencia entre let, const  ¿En qué casos usarías cada uno?
// Respuesta: Let es para declarar variables y el const es cuando declaras tambien una variable pero el valor siempre sera el mismo y no cambiara. El let lo usaria cuando voy a declarar una variable que se que va a cambiar de valor, y el const para una variable que se que valdra el mismo valor por ejemplo el pi siempre valdra 3.14

// Explica la diferencia entre == y === con ejemplos.
// El == compara si son iguales los dos valores no importa que sean de diferente tipo, en cambio el === compara
// que sean iguales los valores y que sean del mismo tipo.
// '5' == 5
// 5 === 5

// Enumera al menos 5 tipos de datos en JavaScript con un ejemplo para cada uno.
// RESPUESTA: CADENAS DE TEXTO (STRING), NUMERO ENTEROS(Number), Booleanos(true, false), Double y Float.
// String: let palabra1 = "Hola" Numeros enteros: let numero = 20, let MyBool= true;
// let MyDouble = 20.5678 Float: let MyFloat = 0.16

// Menciona 3 operadores logicos.
// &&, ||, !Not(!true)

// Menciona 3 operadores basicos.
// Suma + resta - y multiplicacion *

// ¿Qué valor devuelve el siguiente código? ¿Por qué?
// let edad = 20;
// console.log(edad > 18 && edad < 25);
// Respuesta: devolveria que es verdadero ya que se cumplen las dos condiciones


// Parte 2: Práctica (8 ejercicios)
// Escribe el código necesario para cada ejercicio. Puedes usar  un editor como JSPlayground, etc.

// Declara variables para representar un usuario:
// nombre, edad, ciudad, esEstudiante
// Muestra los datos con console.log en formato amigable

let nombre = 'Vanessa'
let edad = 23
let ciudad = 'Tijuana Baja California'
let student = 'Si es estudiante'

console.log("Nombre: " +nombre, "Edad:"+edad,  "Ciudad:"+ciudad, "¿Es estudiante?:",student)



// Crea un pequeño programa que reciba 2 números (a y b) y:
// Muestre la suma, resta, multiplicación y división
// Muestre si a es mayor que b, menor o igual
let numero1 = 10
let numero2 = 10

console.log(numero1+numero2)
console.log(numero1-numero2)
console.log(numero1*numero2)
console.log(numero1/numero2)


if (numero1 > numero2) {
    console.log("Numero1 es mayor que numero2");
} else if (numero1 < numero2) {
    console.log("Numero1 es menor que numero2");
} else {
    console.log("Numero1 es igual a numero2");
}


// Usa if/else para verificar la edad de una persona:
// Menor a 13: "Niño"
// 13 a 17: "Adolescente"
// 18 a 64: "Adulto"
// 65 o más: "Adulto mayor"

let age = 65
if (age < 13) {
    console.log(`Niño`);
} else if (age >= 13 && age <= 17) {
    console.log(`Adolescente`);
} else if (age >= 18 && age <= 64) {
    console.log(`Adulto`);
}
else {
    console.log("Adulto mayor")
}

// Crea un menú simple usando switch con las opciones:
// "1": Mostrar "Bienvenido"
// "2": Mostrar "Ver perfil"
// "3": Mostrar "Salir"
// Cualquier otro: "Opción inválida"

let option = 0
switch (option) {
    case 1:
        console.log("Bienvenido")
        break;
    case 2:
        console.log("Ver perfil")
        break;
    case 3:
        console.log("Salir")
        break;
    default:
        console.log("Opcion no valida")
}


// Clasifica una calificación usando switch(true):
// A: 90 a 100
// B: 80 a 89
// C: 70 a 79
// D: 60 a 69
// F: menos de 60

let nota = 78
switch (true) {
    case (nota >= 90 && nota <= 100):
        console.log("A")
        break;
    case (nota >= 80 && nota <= 89):
        console.log("B")
        break;
    case (nota >= 70 && nota <= 79):
        console.log("C")
        break;
    case (nota >= 60 && nota <= 69):
        console.log("D")
        break;
    default:
        console.log("F")
}

// Usa operadores lógicos para determinar si una persona puede entrar a una disco:
// Debe tener más de 18 años y llevar identificación
// Si no cumple ambas condiciones, mostrar "Acceso denegado"

let edadd = 20
let credencial = true
if (edadd > 18 && edadd)
    console.log("Acceso concedido")
else {
    console.log("Acceso denegado")

}

// Crea un programa que reciba una variable temperatura y:
// Menos de 0: "Congelando"
// 0–18: "Frío"
// 19–30: "Templado"
// Más de 30: "Caluroso"
// (Usa switch(true))
let temp = 56
switch (true) {
    case (temp < 0):
        console.log("Congelado")
        break;
    case (temp >= 0 && temp <= 18):
        console.log("Frio")
        break;
    case (temp >= 19 && temp <= 30):
        console.log("Templado")
        break;
    default:
        console.log("Caluroso")
}