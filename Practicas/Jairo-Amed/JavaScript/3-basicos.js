switch (valor) { 
    case valor:
      // codigo si valor == valor1
      breaak;
  }

  case (valor2) {
  // codigo si valor = valor2
    break;
  default:
  // codigo que se ejecut por defecto
  }

  let comida = "tacos"
switch ((comida)) {
    case "tacos":
    console.log ("comida mexicana")
    break;
  case "pizza":
  console.log ("comida americana")
    beak;
  case "tapas":
  console.log ("comida espanola")
  break
  default:
  console.log ("Comida de otra prte del mundo")
}

let semaforo = "amarillo"
switch ((semaforo)) {
    case "rojo":
    console.log ("Detente")
    break;
  case "amrillo":
  console.log ("Baja la velocidad")
    beak;
  case "verde":
  console.log ("Continua")
  break
  default:
  console.log ("No existe este color ")
}

let calificacion = "F"
switch ((calificacion)) {
    case "A":
    console.log ("Excelente")
    break
  case "B":
  console.log ("Muy bien")
    break;
  case "C":
  console.log ("Regular")
  break
  case "D":
  console.log ("Malo")
  break
  case "F":
  console.log ("Reprobado")
  break  
  default:
  console.log ("Calificacio invalida")
}

let alimento = "Manzana"
switch ((alimento)) {
    case "Manzana":
  case "Naranja":
  case "Pina":
  console.log ("Comida saludable")
  break
  case "Soda":
  case "Papitas":
  console.log ("Comida chatarra")
  break  
}

let dia = "Viernes";
switch (dia) { 
    case "Lunes":
        console.log("Inicio de semana");
        break;
    case "Miercoles":
        console.log("Mitad de semana");
        break;
    case "Viernes":
        console.log("Casi fin de semana");
        break;
    case "Sabado":
    case "Domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Cualquier otro dia");
}

let edad = 15;

switch (true) {
    case (edad < 13):
        console.log("Niño");
        break;
    case (edad >= 13 && edad < 18):
        console.log("Adolescente");
        break;
    case (edad >= 18):
        console.log("Adulto");
        break;
    default:
        console.log("Edad no válida");
}