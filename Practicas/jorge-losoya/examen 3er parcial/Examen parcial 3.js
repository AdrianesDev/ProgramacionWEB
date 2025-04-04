// Examen de JavaScript – Nivel: Básico
// Total: 15 preguntas (6 teóricas + 8 prácticas)

// Parte 1: Teoría (7 preguntas)
// Responde con tus propias palabras o con fragmentos de código cortos.

// ¿Cuál es la diferencia entre let, const  ¿En qué casos usarías cada uno?

// Explica la diferencia entre == y === con ejemplos.

// Enumera al menos 5 tipos de datos en JavaScript con un ejemplo para cada uno.

// Menciona 3 operadores logicos.

// Menciona 3 operadores basicos.

// ¿Qué valor devuelve el siguiente código? ¿Por qué?
// let edad = 20;
// console.log(edad > 18 && edad < 25);


// Parte 2: Práctica (8 ejercicios)
// Escribe el código necesario para cada ejercicio. Puedes usar  un editor como JSPlayground, etc.

// Declara variables para representar un usuario:
// nombre, edad, ciudad, esEstudiante
// Muestra los datos con console.log en formato amigable


// Crea un pequeño programa que reciba 2 números (a y b) y:
// Muestre la suma, resta, multiplicación y división
// Muestre si a es mayor que b, menor o igual

// Usa if/else para verificar la edad de una persona:
// Menor a 13: "Niño"
// 13 a 17: "Adolescente"
// 18 a 64: "Adulto"
// 65 o más: "Adulto mayor"

// Crea un menú simple usando switch con las opciones:
// "1": Mostrar "Bienvenido"
// "2": Mostrar "Ver perfil"
// "3": Mostrar "Salir"
// Cualquier otro: "Opción inválida"

// Clasifica una calificación usando switch(true):
// A: 90 a 100
// B: 80 a 89
// C: 70 a 79
// D: 60 a 69
// F: menos de 60

// Usa operadores lógicos para determinar si una persona puede entrar a una disco:
// Debe tener más de 18 años y llevar identificación
// Si no cumple ambas condiciones, mostrar "Acceso denegado"


// Crea un programa que reciba una variable temperatura y:
// Menos de 0: "Congelando"
// 0–18: "Frío"
// 19–30: "Templado"
// Más de 30: "Caluroso"
// (Usa switch(true))

let edad = 25; // Puede cambiar más adelante.
const nombre = "Juan"; // No puede cambiar.

console.log(5 == "5"); // true
console.log(5 === "5"); // false


let edad = 20;
console.log(edad > 18 && edad < 25);

let nombre = "Carlos";
let edad = 30;
let ciudad = "Tijuana";
let esEstudiante = true;
console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}, ¿Es estudiante?: ${esEstudiante}`);

let a = 10;
let b = 5;
console.log(`Suma: ${a + b}`);
console.log(`Resta: ${a - b}`);
console.log(`Multiplicación: ${a * b}`);
console.log(`División: ${a / b}`);
console.log(a > b ? "a es mayor" : a < b ? "a es menor" : "a es igual a b");

let edad = 20;
if (edad < 13) {
    console.log("Niño");
} else if (edad < 18) {
    console.log("Adolescente");
} else if (edad < 65) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}

let opcion = "2";
switch (opcion) {
    case "1":
        console.log("Bienvenido");
        break;
    case "2":
        console.log("Ver perfil");
        break;
    case "3":
        console.log("Salir");
        break;
    default:
        console.log("Opción inválida");
}

let calificacion = 85;
switch (true) {
    case calificacion >= 90:
        console.log("A");
        break;
    case calificacion >= 80:
        console.log("B");
        break;
    case calificacion >= 70:
        console.log("C");
        break;
    case calificacion >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
}

let edad = 20;
let tieneID = true;
if (edad > 18 && tieneID) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}

let temperatura = 22;
switch (true) {
    case temperatura < 0:
        console.log("Congelando");
        break;
    case temperatura <= 18:
        console.log("Frío");
        break;
    case temperatura <= 30:
        console.log("Templado");
        break;
    default:
        console.log("Caluroso");
}
