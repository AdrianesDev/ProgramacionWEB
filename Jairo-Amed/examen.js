// Instrucciones:
// 1. Responde todas las preguntas de forma clara y completa.
// 2. Puedes usar fragmentos de código cuando sea necesario.
// 3. En la parte práctica, escribe el código como lo harías en un editor real.
// 4. Puedes usar un editor online como JSPlayground, CodePen o tu entorno local.
// 5. Subir este examen contestado al repositorio de GitHub (hacer Pull Request)
// NOTA: EL EXAMEN NO SERA VALIDO SI NO SE SUBE AL REPOSITORIO, ES IMPORTANTE ASEGURARTE QUE NO ESTAS TRABAJANDO EN LA RAMA 'main', DEBERAS TRABAJAR EN LA RAMA CON TU NOMBRE, DE AHI HACER LOS CAMBIOS.
// ================================
// ------------------------------
// Parte 1: HTML Básico (Teoría)
// ------------------------------

// 1. ¿Qué es HTML y para qué se utiliza en una página web?
html sirve para crear una pagina web, poner titulos, etiquetas, textos, etiquetas en la pagina
 
// 2. ¿Cuál es la estructura básica de un documento HTML? Menciona al menos 3 etiquetas esenciales y su función.
h1 a h6 (para poder insertar un titulo y subtitulos) p (Para poder agregar texto) 

// 3. ¿Qué diferencia hay entre una etiqueta de apertura y una de cierre?
La etiqueta "<" sirve para abrir la etiqueta y la ">" se utiliza para cerrar
la etiqueta junto con el "/"

// 4. ¿Qué es una etiqueta semántica? Da un ejemplo y explica su utilidad.
style y sirve para agregr estilos al texto sin tener que conectar el css al html
// ------------------------------
// Parte 2: JavaScript – Teoría 
// ------------------------------

// 5. ¿Qué es una variable en JavaScript y cómo se declara?
Es un contenedor y sirve para guardar propiedades

// 6. ¿Cuál es la diferencia entre let, const y var?


// 7. ¿Qué es una estructura condicional if y para qué sirve?
 Permite ejecutar un bloque de codigo  

// 8. ¿Cuándo utilizarías un switch en lugar de un if?
Utilizari el "switch" si el valor que tengo es correcto y "if" si el valor que se muestra es diferente
y muestra otro valor
// 9. Observa el siguiente fragmento de código. ¿Qué valor imprime y por qué?
Mayor de edad porque se esta declarando que si es 18 o mayor de 18, imprima que sea mayor de edad
/*
let edad = 18;
if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}
  */

// ==============================
// PARTE 3: PRÁCTICA – JavaScript
// ==============================

// 7. Declara variables para representar un usuario con:
// nombre, edad, ciudad, esEstudiante
// Muestra los datos con console.log en formato amigable.


// 8. Crea un programa que reciba 2 números (a y b) y:
// - Muestre la suma, resta, multiplicación y división
// - Indique si a es mayor que b, menor o igual


// 9. Usa if/else para verificar la edad de una persona:
// Menor a 13: "Niño"
// 13 a 17: "Adolescente"
// 18 a 64: "Adulto"
// 65 o más: "Adulto mayor"


// 10. Crea un menú simple usando switch con las opciones:
// "1": Mostrar "Bienvenido"
// "2": Mostrar "Ver perfil"
// "3": Mostrar "Salir"
// Cualquier otro valor: Mostrar "Opción inválida"


// 11. Clasifica una calificación usando switch(true):
// A: 90 a 100
// B: 80 a 89
// C: 70 a 79
// D: 60 a 69
// F: menos de 60


// 12. Usa operadores lógicos para determinar si una persona puede entrar a una disco:
// Debe tener más de 18 años y llevar identificación
// Si no cumple ambas condiciones, mostrar "Acceso denegado"
let edad = 18;
if (edad >= 18){
  console.log("Acceso concedido");
} else {
  console.log("Acceso denegado");
} 

// 13. Crea un programa que reciba una variable temperatura y:
// Menos de 0: "Congelando"
// 0–18: "Frío"
// 19–30: "Templado"
// Más de 30: "Caluroso"
// (Usa switch(true))
