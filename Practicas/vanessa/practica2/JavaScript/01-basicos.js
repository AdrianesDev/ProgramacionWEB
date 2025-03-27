//Variables y constantes
let myName = "Adrian";
const myLastName = "Castañeda";

//Tipos de datos
const MyString = "Esto es una cadena de caracteres";
const myNumber = 10;
const myBool = false;
const myFloat = 10.23344556677;
const myDouble = 13.55747556
const myNull = null;
const myUndefined = undefined;

console.log(MyString)

//Operadores

let suma = 5 + 5
let resta = 5 - 5
let multi = 5 *5
let divi = 5 / 5
let rest = 5 % 5

console.log(suma)
console.log(resta)
console.log(multi)
console.log(divi)
console.log(rest)

//Operadores de comparacion
// < menor que
// > mayor que
// <= menor igual
// >= mayor igual
// == igual a
// === estrictamente igual
// != diferente a
// !== estrictamente diferente a

10 < 5
10 > 5
10 <= 5
10 >= 5
10 == 5
10 === 5
10 != 5
10 !== 5

10 == '10'
10 === '10'

// Operadores logicos
// && AND
// OR
// ! NOT

true && false
true // true
!false

// true && true == true
// true && false == false
// true // true == true
// true // false == true
// false // false == false

let num1 = 50
let num2 = 90

let sumatoria = num1 + num2
let mayor = num1 > num2

console.log(sumatoria)
console.log(mayor)

let palabra1 = "Hola"
let palabra2= "Mundo"
//cuando son dos strings y se hace una suma se le llama interpolacion
// let frase = palabra1 +" "+ palabra2

let nombre = "Adrian"
let surname = "Castañead Rodriguez"
let age = 26
let frase = `Hola mi nombre es ${nombre} tengo ${age} años, y mis apellidos son ${surname}`
//let frase = ´${num1} ${num2}´ `l`
console.log(frase)