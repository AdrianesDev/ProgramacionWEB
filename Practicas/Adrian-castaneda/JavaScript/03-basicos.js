switch(valor) {
    case valor1:
      // codigo si valor == valor1
      break;
    case valor2:
      //codigo si valor == valor2
      break
    default:
      //codigo en caso de que valor no se cumpla
  }

  let comida = "comida china"

switch(comida) {
  case "tacos":
    console.log("comida mexicana")
    break;
  case "pizza":
    console.log("comida americana")
    break;
  case "tapas":
    console.log("comida española")
    break;
  default:
    console.log("comida de otra parte del mundo")
}

let alimento = "Soda"
switch(alimento) {
  case "Manzana":
  case "Naranja":
  case "Piña":
    console.log("Comida saludable")
    break;
  case "Soda":
  case "Papitas":
    console.log("Comida chatarra")
    break;
}

let opcion = 1
switch(opcion) {
  case 1:
    console.log("Opcion 1")
    break;
  case 2:
    console.log("Opcion 2")
    break;
  case 3:
    console.log("Opcion 3")
    break;
  default:
    console.log("otra opcion")

    
}

let edad = 13

switch(true) {
  case (edad < 13):
    console.log("Niño")
    break;
  case (edad >= 13 && edad < 18):
    console.log("Adolecente")
    break;
  case (edad > 18): 
    console.log("Adulto")
}
