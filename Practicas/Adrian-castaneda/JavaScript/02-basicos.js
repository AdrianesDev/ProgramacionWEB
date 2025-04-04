// condicionales

let edad = 18

if(edad >= 18){
  console.log(`La edad de la persona es mayor de edad`)
} else {
  console.log(`No cumple con la mayoria de edad`)
}

let hora = 9

if (hora < 12) {
  console.log(`Buenos dias`)
}else if(hora < 18) {
  console.log(`Buenas tardes`)
}else {
  console.log(`Buenas noches`)
}

let tieneCredencial = true

if(edad >= 18 && tieneCredencial) {
  console.log(`Tiene la edad para ingresar`)
} else {
  console.log(`No tiene la edad para ingresar`)
}

//Si tiene menos de 13 años impriman "Contenido para niños"
//Si tiene mas de 13 pero menos de  17 años impriman "Contenido para adolesentes"
//Si tiene 18 o mas impriman "Contenido para adultos"
if(edad < 13) {
  console.log("Contenido para niños")
}else if(edad >= 13 && edad <= 17) {
console.log("Contenido para adolecentes")
}else {
  console.log("contenido para adultos")
}



