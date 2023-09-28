let saludo = alert("bienvenido a nuestra peluqueria")

let nombre = prompt("ingresa tu nombre")
if (nombre != "") {
    alert("hola" + " " + nombre)
}
else {
    alert("hola desconocido")
}


let turnos = prompt("ingresa que dia queres tu turno");

while (turnos == 1 || turnos == 2 || turnos == 18); {
    switch (turnos) {
        case 1 :
            alert("disponible");
            break;
        case 2:
            alert("disponible");
            break;
        case 18:
            alert("disponible");
            break;
        default:
            alert("no disponible");
            break;
            
            
            

    }
    turnos = prompt("proba otro dia")
}
let hora = prompt("ingresa el horario")
while(hora == 14 || hora == 16); {
switch (hora) {
    case 14:
        alert("disponible");
        break;
    case 16:
        alert("disponible");
        break;
    default:
        alert("no disponible");
        break;

}
 hora=prompt("horario no disponible proba otro")
}

alert("su turno es el dia" + " "+ turnos+" "+ "a las" + " " + hora+ "horas")


class Clienta {
    constructor(nombres,edad,color){
    this.nombres = nombres;
    this.edad = edad;
    this.color = color;
}
}

const clienta1 = new Clienta("Andrea", "65", "9.4");
const clienta2 = new Clienta("Ivana", "26", "6.3");
const clienta3 = new Clienta("Sofia", "40", "7");

const clientas =[clienta1, clienta2, clienta3];

clientas.push ("clienta4");
console.log (clientas)

clientas.forEach(clientas => {
    console.log("nombres:", clientas.nombres);
    console.log("edad:", clientas.edad);
    console.log("color:", clientas.color);
    console.log("----------");
  });