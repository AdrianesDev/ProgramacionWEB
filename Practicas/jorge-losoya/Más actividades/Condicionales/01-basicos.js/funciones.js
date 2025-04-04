// condicionales

let edad = 18
let tieneCredential = true;
let hora = 14

if(edad >= 18){
    console.log("la edad de la persona es mayor de edad")
} else {
    console.log("No cumple la mayoria de edad")
}

if (hora < 12){
    console.log("Buenos días")
} else if (hora < 14) {
    console.log("Buenas tardes")
} else {
    console.log("Buenas noches")
}

if (edad >= 18 && tieneCredencial) {
    console.log("Puedes entrar al bar")
} else {
    console.log("No puedes entrar al bar");
}

if (edad <= 13) {
    console.log("Contenido para infantes")
} else if (edad >= 14 && edad <= 17) {
    console.log("Contenido para adolecentes");
} else if (edad >= 18) {
    console.log("Contenido para adultos")
}