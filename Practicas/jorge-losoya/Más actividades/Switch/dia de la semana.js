let dia = "martes"

switch(dia) {
        case 'lunes':
            console.log("inicio de semana")
            break;
        case 'miercoles':
            console.log("mitad de semana")
            break;
        case 'viernes':
            console.log("casi fin de semana")
            break;
        case 'sabado':
  case 'domingo':
            console.log("fin de semana")
            break;
    default:
            console.log("dia normal");
            break;
    }