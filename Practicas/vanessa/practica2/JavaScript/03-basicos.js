//switch(valor) {
//    case valor1:
//Codigo si valor ==valor1
//      break;
//    case valor2:
//Codigo si valor ==valor1
//      break;
//    default:
//Codigo en caso de que valor no se cumple
// }

/*let comida = "comida china"

switch(comida){
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
    console.log("comida del otro lado delmundo")
} */

/* let semaforo = "verde"
switch(semaforo) {
    case "rojo":
    Console.log("alto")
    break;
    case "amarillo":
    console.log("Baje la velocidad")
    break;
    case "verde":
        console.log("avance")
            break;
            default:
                console.log("No existe ese color en el semaforo")    
} */

//Crear programa que reciba una calificacion en letra A,B,C,D,E,F. 
// A: EXCELENTE
// B: MUY BIEN
// C: REGULAR
// D: MALO
// F: REPROBADO
// CALIFICACION INVALIDA OTRA LETRA

/* let calificacion = "A"
switch (calificacion) {
    case "A":
    console.log("EXCELENTE")
    break;
    case "B":
        console.log("MUY BIEN")
        break;
        case "C":
            console.log("REGULAR")
            break;
            case "D":
                console.log("MALO")
                break;
                case "F":
                console.log("REPROBADO")
             break;
        default:
            console.log("calificacion invalida")
} */

/*        let alimento = "Manzana"
        switch(alimento) {
            case "Manzana":
            case "Naranja":
            case "Piña":
                console.log("Comida saludable")
                break;
            case "Soda":
            case "Papitas":
                console.log("Comida Chatarra")
                break;
        } */

/*   let dia = "Martes"
   switch (dia) {
       case "Lunes":
           console.log("Inicio de semana")
           break;
       case "Miercoles":
           console.log("Mitad de semana")
           break;
       case "Viernes":
       console.log("Casi fin de semana")
       break;
       case "Sabado":
       case "Domingo":
           console.log("Fin de semana")
           break;
       default: 
       console.log("Dia normal")
   } */

//Crear un programa que identique usuarios
// opcion 1: Admin
// opcion 2: User
// opcion 3: Dev
// default invitado

/* let opcion = 4
switch (opcion) {
    case 1:
        console.log("Admin")
        break;
    case 2:
        console.log("User")
        break;
    case 3:
        console.log("Dev")
        break;
    default:
        console.log("Invitado")
} */


//TAREA 
//Segun el valor de una variable temp, imprime
//Menos de 0: congelado
//0 a 18: frio
// 19 a 30: templado
//mas de 30: caluroso

//usar switch(true) {}

let temperatura = 56
switch (true) {
    case (temperatura < 0):
        console.log("Congelado")
        break;
    case (temperatura >= 0 && temperatura <= 18):
        console.log("Frio")
        break;
    case (temperatura >= 19 && temperatura <= 30):
        console.log("Templado")
        break;
    default:
        console.log("Caluroso")
}