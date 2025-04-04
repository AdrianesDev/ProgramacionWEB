// Examen de JavaScript – Nivel: Básico
// Total: 15 preguntas (6 teóricas + 8 prácticas)

// Parte 1: Teoría (7 preguntas)
// Responde con tus propias palabras o con fragmentos de código cortos.

// ¿Cuál es la diferencia entre let, const  ¿En qué casos usarías cada uno? **PREGUNTA

// let lo usaría  para definir una variable, const es para definir un valor.
//ejemplo:
let Nombre = "Juan"
//En este caso, Juan es el valor (por el const) y Nombre es la variable con el let.

// Explica la diferencia entre == y === con ejemplos. **PREGUNTA

//"==" Compara los valores sin importar el tipo de dato. Si los tipos son diferentes,
//JavaScript intenta convertirlos (coerción de tipos) para realizar la comparación.
//mientras que, "===" compara tanto el valor como el tipo de dato. No realiza ninguna
//conversión, por lo que ambos deben coincidir exactamente iguales.

console.log(5 == "5"); // es verdadero, porque convierte el string "5" en número 5.
console.log(true == 1); // es verdadero, porque true se convierte en 1.

console.log(5 === "5"); // es falso, porque 5 es número y "5" es string.
console.log(true === 1); // es falso, porque true es boolean y 1 es número.

// Enumera al menos 5 tipos de datos en JavaScript con un ejemplo para cada uno. **PETICIÓN

//bolean, string, number, object, undefined

// Menciona 3 operadores logicos. **PETICIÓN

//&& Agrea una condición más. || Busca una condición diferente para cumplir la respuesta, es decir basta con que una de ella se cumpla. y ! busca negar la condición.

console.log(true && true); // verdadero
console.log(true && false); // falso

console.log(true || false); // verdadero
console.log(false || false); // falso

console.log(!true); // falso
console.log(!false); // verdadero

// Menciona 3 operadores basicos.

//+ La suma, - la resta, * multiplicación. JS los interpreta correctamente, para realizar las operaciones.

// ¿Qué valor devuelve el siguiente código? ¿Por qué? **PREGUNTA
// let edad = 20;
// console.log(edad > 18 && edad < 25);

//Te devolverá que es verdadero, porque le estas dando a la consola buscar la condición de buscar una edad menor a 25 y mayor a 18.
//Esto lo defines por la variable "edad" y el valor del const "20".

// Parte 2: Práctica (8 ejercicios)
// Escribe el código necesario para cada ejercicio. Puedes usar  un editor como JSPlayground, etc.

// Declara variables para representar un usuario:
// nombre, edad, ciudad, esEstudiante
// Muestra los datos con console.log en formato amigable

let nombre = "Jorge Alan";
let edad = 20;
let ciudad = "Tijuana";
let esEstudiante = true;

console.log(`Nombre: ${edad}`);
console.log(`Edad: ${edad}`);
console.log(`Ciudad: ${ciudad}`);
console.log(`¿Es estudiante?: ${esEstudiante ? "Sí" : "No"}`);

// Crea un pequeño programa que reciba 2 números (a y b) y:
// Muestre la suma, resta, multiplicación y división
// Muestre si a es mayor que b, menor o igual

let a = 12;
let b = 8;

console.log(`Suma: ${a + b}`);
console.log(`Resta: ${a - b}`);
console.log(`Multiplicación: ${a * b}`);
console.log(`División: ${a / b}`);

if (a > b) {
    console.log("a es mayor que b");
} else if (a < b) {
    console.log("a es menor que b");
} else {
    console.log("a es igual a b");
}

// Usa if/else para verificar la edad de una persona:
// Menor a 13: "Niño"
// 13 a 17: "Adolescente"
// 18 a 64: "Adulto"
// 65 o más: "Adulto mayor"

let edaD = 45; //le puse la D mayusucula para no confundir a JS con dos variables iguales.

if (edaD < 13) {
    console.log("Niño");
} else if (edaD >= 13 && edaD <= 17) {
    console.log("Adolescente");
} else if (edaD >= 18 && edaD <= 64) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}

// Crea un menú simple usando switch con las opciones:
// "1": Mostrar "Bienvenido"
// "2": Mostrar "Ver perfil"
// "3": Mostrar "Salir"
// Cualquier otro: "Opción inválida"

let opción = "1"
switch(opción){
    case "1":
console.log("Bienvenido")
break;
case "2":
    console.log("Ver perfil")
    break;
case "3":
    console.log("Salir")
    break;
    default:
        console.log("Opción inválida")
}

// Clasifica una calificación usando switch(true):
// A: 90 a 100
// B: 80 a 89
// C: 70 a 79
// D: 60 a 69
// F: menos de 60

let calificacion = 85;

switch (true) {
    case calificacion >= 90 && calificacion <= 100:
        console.log("A");
        break;
    case calificacion >= 80 && calificacion <= 89:
        console.log("B");
        break;
    case calificacion >= 70 && calificacion <= 79:
        console.log("C");
        break;
    case calificacion >= 60 && calificacion <= 69:
        console.log("D");
        break;
    case calificacion < 60:
        console.log("F");
        break;
    default:
        console.log("Calificación inválida");
}


// Usa operadores lógicos para determinar si una persona puede entrar a una disco:
// Debe tener más de 18 años y llevar identificación
// Si no cumple ambas condiciones, mostrar "Acceso denegado"

let Edad = 20; // Otra vez le colocaré mayuscula una letra para evitar el error.
let tieneidentificacion = true; // Usaré verdadero  o falso como operador lógico.

if (Edad > 18 && tieneidentificacion) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}


// Crea un programa que reciba una variable temperatura y:
// Menos de 0: "Congelando"
// 0–18: "Frío"
// 19–30: "Templado"
// Más de 30: "Caluroso"
// (Usa switch(true))

let temperatura = 20;

switch (true) {
    case temperatura < 0:
        console.log("Congelando");
        break;
    case temperatura >= 0 && temperatura <= 18:
        console.log("Frío");
        break;
    case temperatura >= 19 && temperatura <= 30:
        console.log("Templado");
        break;
    case temperatura > 30:
        console.log("Caluroso");
        break;
    default:
        console.log("Valor de temperatura no válido");
}


