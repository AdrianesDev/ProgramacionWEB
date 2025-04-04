let edad = 18

switch(true) {
    case (edad < 13):
    console.log("Nino")
    break;
    case (edad >= 13 && edad < 18):
        console.log("Adolecente")
        break;
    case (edad >= 18):
        console.log("Adulto")
        break;
}