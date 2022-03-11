var Cartas = /** @class */ (function () {
    function Cartas(numero, palo) {
        this.numero = numero;
        this.palo = palo;
    }
    Cartas.prototype.ToString = function () {
        return this.numero + '-' + this.palo;
    };
    return Cartas;
}());
var numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
var palos = ["Espadas", "Bastos", "Oros", "Copas"];
function pinta_baraja(baraja) {
    var i;
    var j;
    var cadena = "";
    for (i = 0; i < 40; i++) {
        if (i % 10 == 0) {
            cadena += "\n";
        }
        cadena += baraja[i].ToString;
        cadena += " ";
    }
    return cadena;
}
function crea_baraja() {
    var i;
    var j;
    var baraja = [];
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 10; j++) {
            var carta = new Cartas(numeros[j], palos[i]);
            baraja.push(carta);
        }
    }
    return baraja;
}
function desordena_baraja(baraja) {
    var j;
    for (var j_1 = 0; j_1 < 40; j_1++) {
        var posicionAleatorio = Math.floor(Math.random() * (39));
        var copiaCarta = baraja[j_1];
        baraja[j_1] = baraja[posicionAleatorio];
        baraja[posicionAleatorio] = copiaCarta;
    }
    return baraja;
}
function siguiente(baraja) {
    var carta_retirada = baraja.pop();
    retiradas.push(carta_retirada);
    if (carta_retirada == undefined) {
        console.log("No hay mas cartas");
    }
    return carta_retirada;
}
function cartas_disponibles(baraja) {
    return baraja.length;
}
function dar_cartas(baraja, n_cartas) {
    for (j = 0; j < n_cartas; j++) {
        var carta_retirada = baraja.pop();
        console.log(carta_retirada);
        retiradas.push(carta_retirada);
    }
}
function cartas_monton() {
    return retiradas;
}
var baraja = crea_baraja();
var retiradas = [];
console.log("Baraja ordenada");
console.log(JSON.stringify(baraja));
console.log("Baraja barajada");
desordena_baraja(baraja);
console.log(JSON.stringify(baraja));
console.log("Cogemos una carta...");
console.log(siguiente(baraja));
console.log("Cartas restantes...");
console.log(cartas_disponibles(baraja));
console.log("Retiramos 5 cartas...");
dar_cartas(baraja, 5);
console.log("Cartas restantes...");
console.log(cartas_disponibles(baraja));
console.log("Mazo de cartas retiradas...");
console.log(JSON.stringify(retiradas));
/*
do{

let person:number = Number(prompt("Opciones:\n 1. Barajar cartas"+
"\n 2. Siguiente carta"+
"\n 3. Cartas disponibles"+
"\n 4. dar cartas"+
"\n 5. cartas monton"+
"\n 6. mostrar baraja"));



switch(person) {
    case 1:
        console.log("Baraja desordenada");
        desordena_baraja(baraja_operar);
        console.log(baraja_operar);
      break;
    case 2:
        // code block
       break;
    case 3:
        // code block
    break;
    case 4:
            // code block
    break;
    case 5:
              // code block
    break;
    case 6:
        console.log(person);
    break;
    
    default:
      // code block
  }

}while(person!=0);




//console.log(rellena_baraja());

//console.log(desordena_baraja(rellena_baraja()));




/*
console.log("Baraja entera ordenada: ");
console.log(baraja);



console.log("Baraja entera desordenada: ");
console.log(baraja);*/
