// Examen de JavaScript – Nivel: Básico
// Total: 15 preguntas (6 teóricas + 8 prácticas)

// Parte 1: Teoría (7 preguntas)
// Responde con tus propias palabras o con fragmentos de código cortos.

// ¿Cuál es la diferencia entre let, const  ¿En qué casos usarías cada uno?
    // let es como una variable donde puedes guardar datos, const es no se le puede cambiar





// Explica la diferencia entre == y === con ejemplos.
 // el === es para hacerlo estrcitamente, == para comparar 


// Enumera al menos 5 tipos de datos en JavaScript con un ejemplo para cada uno.
// 


// Menciona 3 operadores logicos.
// && || ! 


// Menciona 3 operadores basicos.

//  - + % 

// ¿Qué valor devuelve el siguiente código? ¿Por qué?
// let edad = 20;
// console.log(edad > 18 && edad < 25);
 
// pues que esta dentro de por que cumple los dos requisitos



// Parte 2: Práctica (8 ejercicios)
// Escribe el código necesario para cada ejercicio. Puedes usar  un editor como JSPlayground, etc.



// Declara variables para representar un usuario:
// nombre, edad, ciudad, esEstudiante
// Muestra los datos con console.log en formato amigable

let nombre = "Ashli"
let edad2 = 19
let ciudad = "Tijuana"
let estudiante   = "si"
 
  console.log("mi nombre es (nombre)")






// Crea un pequeño programa que reciba 2 números (a y b) y:
// Muestre la suma, resta, multiplicación y división
// Muestre si a es mayor que b, menor o igual







// Usa if/else para verificar la edad de una persona:
// Menor a 13: "Niño"
// 13 a 17: "Adolescente"
// 18 a 64: "Adulto"
// 65 o más: "Adulto mayor"

let edad = 6
if(edad <13){
  console.log("Niño") 
} else if(edad >= 13 && edad <=17) {
  console.log("Adolescente")
} else if(edad >= 18 && edad <= 64){
  console.log("Adulto")
} else (edad <=65);{
  console.log("Eres un adulto mayor")
}




// Crea un menú simple usando switch con las opciones:
// "1": Mostrar "Bienvenido"
// "2": Mostrar "Ver perfil"
// "3": Mostrar "Salir"
// Cualquier otro: "Opción inválida"

let option = 2
switch (true){
    }case1 (option1)
    console.log("Bienvenido")
    break;
    case2 (option2)
    console.log("Ver perfil")
    break;
    case3 (option3)
    console.log("Salir")
    break;
default:
  console.log("option novalida")
  break;


// Clasifica una calificación usando switch(true):
// A: 90 a 100
// B: 80 a 89
// C: 70 a 79
// D: 60 a 69
// F: menos de 60

 let calificacion = 90

 switch (true){
    case (calificacion >=90 && calificacion <=100):
        console.log("Aprobado")
        break;
    case (calificacion >=80 && calificacion <=89):
        console.log("muy bien")
        break;
    case (calificacion >=70 && calificacion <= 79):
        console.log ("Regular")
        break;
    case (calificacion >=60 && calificacion <= 69):
        console.log("Puedes mejorar")
        break;
    case (calificacion <60):
        console.log("Reprobado")
         break;
 }




// Usa operadores lógicos para determinar si una persona puede entrar a una disco:
// Debe tener más de 18 años y llevar identificación
// Si no cumple ambas condiciones, mostrar "Acceso denegado"

let edad1 = 16

if(edad1 <18){
  console.log("Puedes ingresar") 
} 










// Crea un programa que reciba una variable temperatura y:
// Menos de 0: "Congelando"
// 0–18: "Frío"
// 19–30: "Templado"
// Más de 30: "Caluroso"
// (Usa switch(true))
let temperatura = 100

switch (true){
    case (temperatura < 0):
        console.log ("congelado");
        break;
    case (temperatura >=0 && temperatura <= 18):
        console.log ("frio");
        break;
    case (temperatura >=19 && temperatura <=30):
        console.log ("templado")
        break;
    case (temperatura >30):
        console.log ("caluroso")
        break;
    default:
        console.log("valor no válido");
}