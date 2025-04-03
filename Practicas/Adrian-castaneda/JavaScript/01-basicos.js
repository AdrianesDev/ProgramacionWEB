//variables y constantes
let myName = "Adrian";
const myLastName = "Castañeda";

//tipos de datos
const myString = "Esto es una cadena de caracteres";
const myNumber = 10;
const myBool = false;
const myFloat = 10.345660;
const myDouble = 13.203492031342;
const myNull = null;
const myUndefined = undefined;

///Tipo de datos
//String
//Number
//Bool
//Float
//Doubles
//Null
//Undefinded

///Operadores
// +
// -
// /
// /*
// %

let suma = 5 + 5
let resta = 5 - 5
let multi = 5 * 5
let div = 5 / 5
let rest = 5 % 5

console.log(suma)
console.log(resta)
console.log(div)
console.log(multi)
console.log(rest)

// operadores de comparacion
// <  menor que
// >  mayor que
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

// operadores logicos
// && AND
// || OR
// ! NOT

true && false 
true || true 
!false

// true && true == true
// true && false == false
// true || true == true
// true || false == true
// false || false == false

let number1 = 10
let number2 = 15

let sum = number1 + number2
let esMayor = number1 > number2

console.log(sum)
console.log(esMayor)

number1 = 20
sum = number1 + number2
esMayor = number1 > number2
console.log(sum)
console.log(esMayor)

let palabra1 = "Hola"
let palabra2 = "Mundo"
// cuando son 2 String y se hace una suma se le llama interpolacion 
// let frase = palabra1 +" "+ palabra2
let name = "Adrian"
let surname = "Castañeda Rodriguez"
let age = 26
let frase = `Hola mi nombre es ${name} tengo ${age} años, y mis apellidos son ${surname}`


frase


