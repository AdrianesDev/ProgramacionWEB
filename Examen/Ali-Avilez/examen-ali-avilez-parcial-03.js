// Examen de JavaScript – Nivel: Básico
// Total: 15 preguntas (6 teóricas + 8 prácticas)

// Parte 1: Teoría (7 preguntas)
// Responde con tus propias palabras o con fragmentos de código cortos.

// ¿Cuál es la diferencia entre let, const  ¿En qué casos usarías cada uno?
//--> let es donde le asignas un valor 
//--> una constate es donde se almacena un dato o como una memoria 

// Explica la diferencia entre == y === con ejemplos.
// uno es extrictamente igual (===) y el otro no


// Enumera al menos 5 tipos de datos en JavaScript con un ejemplo para cada uno.
//Boolean
//switch
//null
//undefinde
//Number

// Menciona 3 operadores logicos.
//&&
//===
//==


// Menciona 3 operadores basicos.
//+ (suma)
//- (resta)
//* (multiplicacion)


// ¿Qué valor devuelve el siguiente código? ¿Por qué?
// let edad = 20;
// console.log(edad > 18 && edad < 25);


// Parte 2: Práctica (8 ejercicios)
// Escribe el código necesario para cada ejercicio. Puedes usar  un editor como JSPlayground, etc.

// Declara variables para representar un usuario:
// nombre, edad, ciudad, Estudiante
// Muestra los datos con console.log en formato amigable


// Crea un pequeño programa que reciba 2 números (a y b) y:
// Muestre la suma, resta, multiplicación y división
// Muestre si a es mayor que b, menor o igual


// Usa if/else para verificar la edad de una persona:
// Menor a 13: "Niño"
// 13 a 17: "Adolescente"
// 18 a 64: "Adulto"
// 65 o más: "Adulto mayor"

let edad = 25; 
if (edad < 13) {
  console.log("Niño");
} else if (edad >= 13 && edad <= 17) {
  console.log("Adolescente");
} else if (edad >= 18 && edad <= 64) {
  console.log("Adulto");
} else if (edad >= 65) {
  console.log("Adulto mayor");
}


// Crea un menú simple usando switch con las opciones:
// "1": Mostrar "Bienvenido"
// "2": Mostrar "Ver perfil"
// "3": Mostrar "Salir"
// Cualquier otro: "Opción inválida"

let opc = "Bienvenido"
switch (opc){
  case (1);
    console.log("Bienvenido")
    break;
  case (2)
    console.log("Ver perfil")
    break;
  case (3)
    console.log("Salir")

  default:
    console.log("Opción inválida")
}
   

// Clasifica una calificación usando switch(true):
// A: 90 a 100
// B: 80 a 89
// C: 70 a 79
// D: 60 a 69
// F: menos de 60
let cali = 85;
switch (true) {
  case (cali >= 90 && cali <= 100):
    console.log("A");
    break;
  case (cali >= 80 && cali <= 89):
    console.log("B");
    break;
  case (cali >= 70 && cali <= 79):
    console.log("C");
    break;
  case (cali >= 60 && cali <= 69):
    console.log("D");
    break;
  default:
    console.log("F");
}
 

// Usa operadores lógicos para determinar si una persona puede entrar a una disco:
// Debe tener más de 18 años y llevar identificación
// Si no cumple ambas condiciones, mostrar "Acceso denegado"
let años = 18
switch(años){
   case (años<=15):
    console.log("Acceso denegado")
   case (años<=18) :
    console.log("acceso permitido")
}



// Crea un programa que reciba una variable temperatura y:
// Menos de 0: "Congelando"
// 0–18: "Frío"
// 19–30: "Templado"
// Más de 30: "Caluroso"
// (Usa switch(true))

let temp = 0; 
if (temp < 0) {
  console.log("Congelado");
} else if (temp>= 0 && temp<= 18) {
  console.log("Frio");
} else if (temp>= 19 && temp<= 30) {
  console.log("Templado");
} else if (temp >= 30) {
  console.log("Caluroso");
}