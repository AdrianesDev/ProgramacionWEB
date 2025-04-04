let temp = 25;

switch (true) {
  case (temp < 0):
    console.log("congelado");
    break;
  case (temp >= 0 && temp <= 18):
    console.log("frio");
    break;
  case (temp >= 19 && temp <= 30):
    console.log("templado");
    break;
  case (temp > 30):
    console.log("caluroso");
    break;
  default:
    console.log("Valor fuera de rango");
}
