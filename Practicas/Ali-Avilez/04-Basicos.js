//ejemplo
let semaforo = "Verde"
switch (semaforo){
  case "rojo":
      console.log ("Alto")
  break;
    case Amarillo:
      console.log("baje la velocidad")
      break;
  case "Verde":
      console.log("Avance")
    break;  
  default:
    console.log("no existe ese color en el semaforo")
}

//Actividad
let Cali = "G"
switch (Cali){
  case "A":
    console.log("Excelente")
    break;
  case "B":
    console.log("Muy bien")
    break;
  case "C":
    console.log("Regular")
    break;
  case "D":
    console.log("Malo")
    break;
  case "F":
    console.log("Reprobado")
    break;

  default:
    console.log("Calificacion Invalida")
}

//ejemplo
let alimentos = "Manzana"
switch (alimentos){
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

//Actividad
let Semana = "Lunes"
switch (Semana){
  case "Lunes":
    console.log("inicio de semana")
    break;
  case "Miercoles":
       console.log("Mitad de semana")
    break;
  case "Viernes":
    console.log("Casi fin de semana")
    break;
  case "sabado o domingo":
    console.log("Fin de semana")
    break;

  default:
    console.log("Dia normal")
}

//actividad
let Usuarios = "Opcion 5"
switch (Usuarios){
  case "Opcion 1":
    console.log("admin")
    break;
  case "Opcion 2":
       console.log("User")
    break;
  case "Opcion 3":
    console.log("Dev")
    
  default:
    console.log("invitado")
}

let edad = 13

switch (true){
  case (edad < 13):
    console.log("Niño")
    break;
  case (edad >= 13 && edad <18):
    console.log("Adolecente")
    break;
  case (edad > 18):
    console.log("Adulto")
}





